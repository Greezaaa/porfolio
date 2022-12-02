import style from "./about.module.scss"
const About = () => {

    return (
        <div className={style.about_wrapper}>

            <h3>Hi<span className={style.highlight}>! </span>I'm <span className={style.highlight}>Jeka</span></h3>
            <p>After 11 years working with specialty coffee I decided to make a turn in my life and make my way in <span className={style.highlight}><strong><em>"JavaScript Fullstack development"</em></strong></span></p>
            <p>Few years ago, in 2016 I start learning <span className={style.highlight}><strong>HTML</strong></span> / <span className={style.highlight}><strong>CSS</strong></span> and <span className={style.highlight}><strong>PHP</strong></span>, so I could adapt my buisness web page in WordPress to what my business need. It was hard, but after few months of fight <strong>I got it!</strong> </p>
            <p>I'm curious, and curiosity keep me busy learning evertime more and more, trying to find perfection and simplicity on what im doing. People who know me can describe me as dedicated, passionate, hardworker, always trying to learn more and give my best to help my teammates.</p>
            <p>I know my experience is not a lot, but I'm sure I can be in level with what you need very fast. Anyway I did few WordPres Themes from scratch and some landing pages for comercial use. All my work is fully responsive, focused on "mobile first". Actualy just finished a "Code4Jobs" bootcamp with <span className={style.highlight}>"Fullstack development"</span> specialization with <span className={style.highlight}>NodeJS</span> / <span className={style.highlight}>Express</span> / <span className={style.highlight}>NestJS</span> and <span className={style.highlight}>ReactJS</span> </p>
        </div>
    )
}
export default About