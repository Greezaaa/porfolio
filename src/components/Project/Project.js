import style from './project.module.scss'
import Aos from "aos"
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Project = ({project}) => {

    return (
        <div id={`project_id${project.id}`}  className={style.project}>
                            <div className={style.project_header}>
                                <h2>{project.title}</h2>
                                <img src={`/media/${project.imgUrl.gif}`} width={600} alt="" />
                            </div>
                            <p className={style.desc}>{project.desc}</p>
                                <div className={style.line}></div>
                            <div className={style.links}>
                                <a href={project.url.git} target="_blank" > _checkcode</a>
                                <span></span>
                                <a href={project.url.live} target="_blank" > _live</a>
                            </div>
                        </div>
    )
}
export default Project