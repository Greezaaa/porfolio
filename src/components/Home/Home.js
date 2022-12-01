import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import style from './home.module.scss'
import Arrow from '../Icons/Arrow'
const Home = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (
        <div className={style.hero_wrapper}>
            <div className={style.hero_content}>
                <div className={style.hero_main}>
                    <h3
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-sine"
                    ><span className={style.npm}> &gt;__</span> Hello world  👋</h3>
                    <h2
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-sine"
                    ><span>I'm <span className={style.hightlight}>Yevheniy Alekseyev</span>,</span></h2>
                    <h2
                        data-aos="zoom-out"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    ><span >I'm <span className={style.hightlight}>Full-stack</span> web developer</span></h2>
                    <h3
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-sine"
                    >but you can call me "Jeka" <span className={style.blinks}>|</span></h3>
                </div>
                <img src="https://user-images.githubusercontent.com/55212034/204159894-25762574-0bdd-4088-8ffe-0c49682e037b.png" width="200" alt="Yevheniy Alekseyev Fullstack Developer" />
            </div>
            <div className={style.hero_links}>
                <ul>
                    <li><Link
                        to="./about"
                        data-aos="fade-left"
                        data-aos-offset="300"
                        data-aos-duration="1000"
                        data-aos-easing="ease"
                    ><Arrow stroke={"#ca2f00"} />about me</Link></li>
                    <li><span>| |</span></li>
                    <li><Link to="./projects"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-duration="1200"
                        data-aos-easing="ease"
                    >some of my works<Arrow stroke={"#ca2f00"} /></Link>                    </li>
                </ul>
            </div>
            <div className={style.scoialsY}></div>
        </div>
    )
}
export default Home