// import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Aos from "aos"
import 'aos/dist/aos.css'
import style from './header.module.scss'
import GitHub from '../Icons/GitHub';
import LinkedIn from '../Icons/LinkedIn';
import Logo from '../Icons/Logo';
import EmailIcon from '../Icons/EmailIcon';


const Header = () => {

    const pathname = window.location.pathname //returns the current url minus the domain name

    const [IsOpen, setIsOpen] = useState(false)
    const openMenu = () => {
        setIsOpen(!IsOpen) 
    }



    useEffect(()=> {
        Aos.init({duration: 2000})
    },[])




    return (
        <header className={style.header}>
            <div className={`${style.hamburger} ${ IsOpen ? style.open : ""}`} onClick={()=>openMenu()} ><span></span><span></span><span></span></div>
            <div className={style.logo}>
                <Logo />
            </div>
            <div className={`${style.social} ${ IsOpen ? style.open : ""}`}>
                <EmailIcon />
                <GitHub />
                <LinkedIn />
            </div>
            <div className={`${style.navigation} ${ IsOpen ? style.open : ""}`} >
                <Link
                    to="/"
                    className={`${style.link} ${(pathname == "/") ? style.active : ""}`}
                    onClick={()=>openMenu()}
                    >home</Link>
                <Link
                    to="/works"
                    className={`${style.link} ${(pathname == "/works") ? style.active : ""}`}
                    onClick={()=>openMenu()}
                    >works</Link>
                <Link
                    to="/about"
                    className={`${style.link} ${(pathname == "/about") ? style.active : ""}`}
                    onClick={()=>openMenu()}
                    >about</Link>
                <Link
                    to="/contact"
                    className={`${style.link} ${(pathname == "/contact") ? style.active : ""}`}
                    onClick={()=>openMenu()}
                    >get in touch</Link>
            </div>
        </header>
    )
}

export default Header