import {useEffect, useState} from "react";
import StrokeLeft from "../icons/stroke-left";
import StrokeRight from "../icons/stroke-right";

export default function HomePage() {
    const [animate, setAnimate] = useState(false)
    const [activeWork, setActiveWork] = useState(0)
    const [text, setText] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [email, setEmail] = useState('')

    const [comments, setComments] = useState([{
        user: 'Александр Иванов',
        text: 'Очень довольны работой этой компании! Демонтаж прошел быстро и безопасно, все сделали очень профессионально. Рекомендую!',
    }, {
        user: 'Андрей Кузнецов',
        text: 'Мы заказывали демонтаж здания и были приятно удивлены скоростью и качеством работы. Команда была очень дружелюбной и внимательной к нашим требованиям. Спасибо!',
    }, {
        user: 'Дмитрий Смирнов',
        text: 'Приятно работать с такой компанией. Работы выполнены точно в срок, сотрудники профессионально и аккуратно выполнили демонтаж здания. Большое спасибо!',
    }, {
        user: 'Екатерина Попова',
        text: 'Я заказывал демонтаж мелкого здания на моей территории, и команда справилась с работой очень хорошо. Они быстро и безопасно выполнили все работы, и я остался очень доволен результатом.',
    }, {
        user: 'Иван Федоров',
        text: 'Мы заказывали демонтаж крупного здания, и это был действительно большой проект. Но компания справилась с задачей на отлично, все прошло гладко и быстро. Спасибо, что сделали это возможным!',
    }])

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 100)
    }, [])

    const handleActiveWork = (inc) => setActiveWork((activeWork + inc) % 3 < 0 ? 2 : (activeWork + inc) % 3)

    const handleComment = () => {
        setComments([...comments, {user: 'Гость', text}])
        setText('')
    }


    return (<div style={{width: '100%'}}>

        <section className="top-banner">
            <div className="top-banner-description">

                <div className="h1-title-container">
                    <h1 className="h1-title"
                        style={{marginTop: animate ? 0 : 70, transitionDelay: '.0s'}}> ДЕМОНТАЖ</h1>
                </div>
                <div className="h1-title-container">
                    <div className="h1-title" style={{marginTop: animate ? 0 : 70, transitionDelay: '.2s'}}> КРУПНЫХ И
                    </div>
                </div>
                <div className="h1-title-container">
                    <div className="h1-title" style={{marginTop: animate ? 0 : 70, transitionDelay: '.4s'}}> МЕЛКИХ
                    </div>
                </div>
                <div className="h1-title-container">
                    <div className="h1-title" style={{marginTop: animate ? 0 : 70, transitionDelay: '.6s'}}> ЗДАНИЙ
                    </div>
                </div>


                <div className="links-social">
                    <div className='link-social-container'>
                        <div className='link-social' style={{
                            width: animate ? 120 : 0, transitionDelay: '.8s'
                        }}>YOUTUBE
                        </div>
                    </div>
                    <div className='link-social-container'>
                        <div className='link-social' style={{
                            width: animate ? 100 : 0, transitionDelay: '1s'
                        }}>VK.COM
                        </div>
                    </div>
                    <div className='link-social'>
                        <div className='link-social' style={{
                            width: animate ? 100 : 0, transitionDelay: '1.2s'
                        }}>INSTAGRAM
                        </div>
                    </div>
                </div>
            </div>

            <img src={require('../images/main.png')} alt=""/>

            <div className="gradient-container">
                <div style={{
                    background: 'linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(255,255,255,.1) 100%',
                    height: '551px',
                    width: '100%',
                }}></div>
            </div>
        </section>


        <marquee style={{margin: '20px -40px'}} behavior="alternate" scrollamount={3}>
            <div style={{display: 'flex', gap: 150, fontSize: 35}}>
                <div>30 ЛЕТ НА РЫНКЕ</div>
                <div>1993 - 2023</div>
                <div>30 ЛЕТ НА РЫНКЕ</div>
                <div>1993-2023</div>
                <div>30 ЛЕТ НА РЫНКЕ</div>
                <div>1993-2023</div>
            </div>
        </marquee>


        <div className="section-title" id="section-1">
            <h1>
                Виды работ
            </h1>
        </div>

        <table>
            <tr>
                <td>01</td>
                <td>Демонтаж сантехкабин</td>
                <td>
                    <ul>
                        <li>Вывозим за собой мусор</li>
                        <li>Без шума и жалом соседей</li>
                        <li>Уложимся в срок или заплптим за каждый день проссрочки</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>02</td>
                <td>Демонтаж старой кабины кабины</td>
                <td>
                    <ul>
                        <li>Вывозим за собой мусор</li>
                        <li>Без шума и жалом соседей</li>
                        <li>Уложимся в срок или заплптим за каждый день проссрочки</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>03</td>
                <td>Демонтаж нежилых помещений</td>
                <td>
                    <ul>
                        <li>Вывозим за собой мусор</li>
                        <li>Без шума и жалом соседей</li>
                        <li>Уложимся в срок или заплптим за каждый день проссрочки</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>04</td>
                <td>Демонтаж стен (любой толщины)</td>
                <td>
                    <ul>
                        <li>Вывозим за собой мусор</li>
                        <li>Без шума и жалом соседей</li>
                        <li>Уложимся в срок или заплптим за каждый день проссрочки</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td>05</td>
                <td>Демонтаж пола любой сложности</td>
                <td>
                    <ul>
                        <li>Вывозим за собой мусор</li>
                        <li>Без шума и жалом соседей</li>
                        <li>Уложимся в срок или заплптим за каждый день проссрочки</li>
                    </ul>
                </td>
            </tr>
        </table>

        <div className="section-title" id="section-2">
            <h1>Примеры работ</h1>
        </div>

        <section className="slider-container">
            <div className="slide-number">
                {`${String(activeWork + 1).length === 2 ? activeWork + 1 : '0' + (activeWork + 1)} / 03`}
            </div>

            <div className="slider">
                <div className="slide" style={{width: activeWork === 0 ? '100%' : 0}}>
                    <img src={require('../images/work1.jpg')} alt=""/>
                </div>
                <div className="slide" style={{width: activeWork === 1 ? '100%' : 0}}>
                    <img src={require('../images/work2.jpg')} alt=""/>
                </div>
                <div className="slide" style={{width: activeWork === 2 ? '100%' : 0}}>
                    <img src={require('../images/work3.jpg')} alt=""/>
                </div>
            </div>

            <div className="slider-title">
                <div>{activeWork === 0 ? 'Демонтаж зданий' : activeWork === 1 ? 'Демонтаж квартир' : 'Демонтаж сантехники'}</div>
                <div className="strokes">
                    <div className="stroke" onClick={() => handleActiveWork(-1)}><StrokeLeft/></div>
                    <div className="stroke" onClick={() => handleActiveWork(1)}><StrokeRight/></div>
                </div>
            </div>
        </section>


        <section className="comments" id="section-3">
            <div className="section-title">
                <h1>Отзывы</h1>
            </div>

            {comments.map((item, index) => (<div>
                {(index > comments.length - 6) && <div key={index} className="comment">
                    <div className="comment-user">
                        <img src={require('../images/profile.jpg')} alt="User image"/>
                        <div className="comment-username">{item.user}</div>
                    </div>
                    <div className="comment-text">{item.text}</div>
                </div>}
            </div>))}

            <div className="form-comment">
                <div className="form__input-container">
                    <input className="form__input"
                           placeholder="Напишите комментарий"
                           type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="button-submit" onClick={handleComment}>Oтправить</div>
            </div>
        </section>

        <section className="form" id="section-4">
            <div className="form-title">ВЫЕЗДНОЙ СПЕЦИАЛИСТ В ЛЮБОМ РАЙОНЕ САМАРЫ С ВЫЕЗДОМ ЧЕРЕЗ МИНУТУ</div>

            <div className="form__input-group">
                <lable className="form__input-lable">Имя</lable>
                <div className="form__input-container">
                    <input className="form__input"
                           placeholder="Введите ваше имя"
                           type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
            </div>

            <div className="form__input-group">
                <lable className="form__input-lable">Телефон</lable>
                <div className="form__input-container">
                    <input className="form__input"
                           placeholder="Введите ваш номер телефона"
                           type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
                </div>
            </div>

            <div className="form__input-group">
                <lable className="form__input-lable">E-mail</lable>
                <div className="form__input-container">
                    <input className="form__input"
                           placeholder="Введите вашу почту"
                           type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>

            <div className="form__input-group">
                <lable className="form__input-lable"><br/></lable>
                <div className="button-submit"
                     onClick={() => {
                     }}>Oтправить
                </div>
            </div>
        </section>

    </div>)
}