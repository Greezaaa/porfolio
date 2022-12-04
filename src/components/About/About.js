import style from "./about.module.scss"
const About = () => {

    return (
        <div className={style.about_wrapper}>

            <h3>Hi<span className={style.highlight}>! </span>I'm <span className={style.highlight}>Jeka</span></h3>
            <p>After 11 years working with specialty coffee I decided to make a turn in my life and make my way in <span className={style.highlight}><strong><em>"JavaScript Fullstack development"</em></strong></span></p>
            <p>Few years ago, in 2016 I started learning <span className={style.highlight}><strong>HTML</strong></span> / <span className={style.highlight}><strong>CSS</strong></span> and <span className={style.highlight}><strong>PHP</strong></span>, so I could adapt my business web page in WordPress to what my business needed. It was hard, but after a few months of trying my best <strong>I got it!</strong> </p>
            <p>I'm curious, and curiosity keeps me busy learning every time more and more, trying to find perfection and simplicity on what im doing. People who know me can describe me as dedicated, passionate, hardworking, always trying to learn more and give my best to help my teammates.</p>
            <p>I did few WordPres Themes from scratch and some landing pages for comercial use. All my work is fully responsive, focused on "mobile first".I actualLy just finished a "Code4Jobs" bootcamp with <span className={style.highlight}>"Fullstack development"</span> specialization with <span className={style.highlight}>NodeJS</span> / <span className={style.highlight}>Express</span> / <span className={style.highlight}>NestJS</span> and <span className={style.highlight}>ReactJS</span> </p>
        </div>
    )
}
export default About