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
            <div className={style.social}>
                <EmailIcon />
                <GitHub />
                <LinkedIn />
            </div>
            <div className={style.navigation} >
                <Link
                    to="/"
                    className={`${style.link} ${style.active}`}
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-duration="1000"
                    data-aos-easing="ease">home</Link>
                <Link
                    to="/works"
                    className={`${style.link} `}
                    data-aos="fade-down"
                    data-aos-offset="500"
                    data-aos-duration="200"
                    data-aos-easing="ease-in-sine">works</Link>
                <Link
                    to="/about"
                    className={`${style.link} `}
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-duration="300"
                    data-aos-easing="ease-in-sine">about</Link>
                <Link
                    to="/contact"
                    className={`${style.link} `}
                    data-aos="fade-down"
                    data-aos-offset="300"
                    data-aos-duration="700"
                    data-aos-easing="ease-in-sine">get in touch</Link>
            </div>
        </header>
    )
}

export default Header