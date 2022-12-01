import { Link } from 'react-router-dom';
import Aos from "aos"
import 'aos/dist/aos.css'
import ContactForm from "../ContactForm/ContactForm"
import style from './contact.module.scss'
import GitHub from '../Icons/GitHub';
import LinkedIn from '../Icons/LinkedIn';
import { useEffect } from 'react';


const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    return (

        <div
            className={style.wrapper}
            data-aos="zoom-in"
            data-aos-offset="100"
            data-aos-duration="200"
            data-aos-easing="ease-in-sine"
        >
            <div
                className={style.content}
                data-aos="fade-left"
                data-aos-offset="100"
                data-aos-duration="400"
                data-aos-easing="ease-in-sine"
            >
                <div className={style.info} >
                    <h3>I love to hear from you.</h3>
                    <h4
                    data-aos="zoom-out"
                    data-aos-offset="100"
                    data-aos-duration="800"
                    data-aos-easing="ease-in-sine"
                    >Whether you have a question or just want to chat <span className={style.npm}>---</span> shoot me a message</h4>

                </div>
                <div className={style.links_wrapper}>
                    <a href="mailto:greezaaa@gmail.com"
                        data-aos="zoom-in"
                        data-aos-offset="100"
                        data-aos-duration="600"
                        data-aos-easing="ease-in-sine"
                    >greezaaa@gmail.com</a>
                    <div className={style.social}>
                        <GitHub/> 
                        <LinkedIn/>

                    </div>
                </div>

            </div>
            <div
                className={style.form_wrapper}
                data-aos="fade-right"
                data-aos-offset="100"
                data-aos-duration="400"
                data-aos-easing="ease-in-sine"
            >
                <ContactForm />
            </div>
        </div>
    )
}
export default Contact