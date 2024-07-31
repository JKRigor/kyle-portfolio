import styles from './ProjectsStyles.module.css'
import tl from '../../assets/Telebet.png'
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
    </section>
  )
}

export default Projects