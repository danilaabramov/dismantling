import {useEffect, useState} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import ButtonBar from "./components/ButtonBar";
import MenuIcon from "./icons/menu";
import HomePage from "./pages/HomePage";
import { HashLink } from 'react-router-hash-link';

function App() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeBar, setActiveBar] = useState(false)
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setAnimate(true)
        }, 100)
    }, [])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (<div className='App' style={{
        overflow: activeBar && windowWidth <= 720 ? 'hidden' : '',
        height: activeBar && windowWidth <= 720 ? '100vh' : ''
    }}>

        <header style={{
            width: animate ? '100%' : 0, transition: 'all 1s', opacity: animate ? 1 : 0
        }}>
            <div className={activeBar ? 'active-header' : 'header'}>

                <div className='header-container'>
                    <div className='left-header-container'>
                        <Link to='/' onClick={() => setActiveBar(false)}>
                            <div className='logo'>Демонтаж</div>
                        </Link>
                    </div>
                    <div className='main-header-container'>
                        <div className='main-header-links' style={{opacity: animate ? 1 : 0}}>
                            <HashLink smooth to='/#services'>
                                <ButtonBar text='Услуги'/>
                            </HashLink>
                            <HashLink smooth to="/#examples">
                                <ButtonBar text='Примеры'/>
                            </HashLink>
                            <HashLink smooth to="/#reviews">
                                <ButtonBar text='Отзывы'/>
                            </HashLink>
                            <HashLink smooth to="/#exit">
                                <ButtonBar text='Выезд'/>
                            </HashLink>
                        </div>
                    </div>
                    <div className='right-header-container' style={{opacity: animate ? 1 : 0}}>
                        <div className='menu-right' onClick={() => setActiveBar(a => !a)}>
                            <MenuIcon color='#fff'/>
                        </div>
                    </div>
                </div>

                <div className={activeBar ? 'top-active-mobile-buttons' : 'top-mobile-buttons'}>
                    <div>
                        <HashLink smooth to="/#services" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Услуги' menu/>
                        </HashLink>
                        <HashLink smooth to="/#examples" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Примеры' menu/>
                        </HashLink>
                        <HashLink smooth to="/#reviews" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Отзывы' menu/>
                        </HashLink>
                        <HashLink smooth to="#/exit" onClick={() => setActiveBar(a => !a)}>
                            <ButtonBar text='Выезд' menu/>
                        </HashLink>
                    </div>
                </div>

            </div>
        </header>

        <main className='main' style={{paddingTop: activeBar && windowWidth <= 720 ? 71 : 0}}>
            <div className='main-container'>
                <Routes>
                    <Route path="/" exact element={<HomePage/>}/>
                </Routes>
            </div>

        </main>
    </div>);
}

export default App;