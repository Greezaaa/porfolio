import style from './projects.module.scss'
import { projectList } from './projectsList.js'
import Project from '../Project/Project';
const Projects = () => {

    console.log(projectList);
    return (
        <div className={style.projects_wrapper}>
            {projectList.map(
                (project, i) => {

                    return (
                        <Project key={i} project={project}/>
                    )
                }
            )}
            
        </div>
    )

}

export default Projects