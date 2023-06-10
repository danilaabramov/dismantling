// Импорт необходимых модулей и компонентов
import {useEffect, useState} from "react";
import StrokeLeft from "../icons/stroke-left";
import StrokeRight from "../icons/stroke-right";

// Определение функции экспорта компонента
export default function HomePage() {

    // Определение переменных состояния компонента
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

    // Использование хука для старта анимации
    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 100)
    }, [])

    // Переключатель слайдера
    const handleActiveWork = (inc) => setActiveWork((activeWork + inc) % 3 < 0 ? 2 : (activeWork + inc) % 3)

    // Определяем функцию для обработки комментариев
    const handleComment = () => {
        setComments([...comments, {user: 'Гость', text}])
        setText('')
    }

    // Определение функции для обработки отправки формы
    const handleSubmit = () => {
        setName('')
        setNumber('')
        setEmail('')
    }

    // Возврат JSX для компонента
    return (<div style={{width: '100%'}}>

        <section className="top-banner"> {/* Компонент верхнего баннера */}
            <div className="top-banner-description">{/* Контейнер описания верхнего баннера */}

                {/* Заголовки верхнего баннера */}
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

                {/* Ссылки на социальные сети */}
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

            {/* Изображение верхнего баннера */}
            <img src={require('../images/main.png')} alt=""/>

            {/* Контейнер градиента */}
            <div className="gradient-container">
                <div className="gradient"
                     style={{background: 'linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(255,255,255,.1) 100%'}}></div>
            </div>
        </section>

        {/* Маркировка с бегущей строкой */}
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

        {/* Заголовок */}
        <div className="section-title" id="services">
            <h1>Услуги</h1>
        </div>
        {/* Таблица услуг */}
        <table>
            <tbody>
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
            </tbody>
        </table>


        {/* Заголовок */}
        <div className="section-title" id="examples">
            <h1>Примеры работ</h1>
        </div>
        {/* Секция примеров услуг */}
        <section className="slider-container">
            {/* Текущий номер */}
            <div className="slide-number">
                {`${String(activeWork + 1).length === 2 ? activeWork + 1 : '0' + (activeWork + 1)} / 03`}
            </div>

            {/* Изображения примеров услуг */}
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

            {/* Название услуги */}
            <div className="slider-title">
                <div>{activeWork === 0 ? 'Демонтаж зданий' : activeWork === 1 ? 'Демонтаж квартир' : 'Демонтаж сантехники'}</div>
                <div className="strokes">
                    <div className="stroke" onClick={() => handleActiveWork(-1)}><StrokeLeft/></div>
                    <div className="stroke" onClick={() => handleActiveWork(1)}><StrokeRight/></div>
                </div>
            </div>

        </section>

        {/* Секция отзывов */}
        <section className="comments" id="reviews">
            {/* Заголовок */}
            <div className="section-title">
                <h1>Отзывы</h1>
            </div>
            {/* Отзывы */}
            {comments.map((item, index) => (<div>
                {(index > comments.length - 6) && <div key={index} className="comment">
                    <div className="comment-user">
                        <img src={require('../images/profile.jpg')} alt="User image"/>
                        <div className="comment-username">{item.user}</div>
                    </div>
                    <div className="comment-text">{item.text}</div>
                </div>}
            </div>))}
            {/* Форма для написания отзыва */}
            <div className="form-comment">
                <div className="form__input-container">
                    <input className="form__input"
                           placeholder="Напишите комментарий"
                           type="text" value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
                <div className="button-submit" onClick={handleComment}>Oтправить</div>
            </div>
        </section>

        {/* Форма для связи с клиентом */}
        <form className="form" id="exit">
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
                <div className="button-submit" onClick={handleSubmit}>Oтправить</div>
            </div>
        </form>

    </div>)
}