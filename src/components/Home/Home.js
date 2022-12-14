import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'
import style from './home.module.scss'
import Arrow from '../Icons/Arrow'
import photo_hero from '../../assets/media/photo_hero.png'
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
                        data-aos-duration="300"
                        data-aos-easing="ease-in-sine"
                    ><span className={style.npm}> &gt;__</span> Hello world  👋</h3>
                    <h2
                        data-aos="fade-right"
                        data-aos-duration="400"
                        data-aos-easing="ease-in-sine"
                    ><span>I'm <span className={style.hightlight}>Yevheniy Alekseyev</span>,</span></h2>
                    <h2
                        data-aos="zoom-out"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-sine"
                    ><span >I'm <span className={style.hightlight}>Full-stack</span> web developer</span></h2>
                    <h3
                        data-aos="fade-left"
                        data-aos-duration="300"
                        data-aos-easing="ease-in-sine"
                    >but you can call me "Jeka" <span className={style.blinks}>|</span></h3>
                </div>
                <div className={style.photo_hero}>
                    <img src={photo_hero} width="200" alt="Yevheniy Alekseyev Fullstack Developer" />
                </div>
            </div>
            <div className={style.hero_links}>
                <ul>
                    <li><Link
                        to="./about"
                      
                    ><Arrow stroke={"#ca2f00"} />about me</Link></li>
                    <li><span>| |</span></li>
                    <li><Link to="./works"
                    >some of my works<Arrow stroke={"#ca2f00"} /></Link>                    </li>
                </ul>
            </div>
            <div className={style.scoialsY}></div>
        </div>
    )
}
export default Home