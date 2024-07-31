import styles from './ProjectsStyles.module.css'
import tl from '../../assets/Telebet.png'
import td from '../../assets/Todo.png'
import ProjectCard from '../../common/ProjectCard'
function Projects() {
  return (
    <section id='projects' className={styles.container}>
        <h1 className='sectionTittle'>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard src={tl} 
            link='https://github.com/JKRigor/telebet'
            h3="Telebet"
            p="Online Gadgets Store"/>
        </div>
        <div className={styles.projectsContainer}>
            <ProjectCard src={td} 
            link='https://github.com/JKRigor/ToDo'
            h3="ToDo List"
            p="Todo List App"/>
        </div>
    </section>
  )
}

export default Projects