import SkillSets from './SkillSets'
import styles from './SkillsStyles.module.css'
import checkd from '../../assets/check1.png'

function Skills() {
  return (
   <section id='skills' className={styles.cotainer}>
        <h1 className='sectionTittle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillSets src={checkd} p="HTML" />
            <SkillSets src={checkd} p="CSS" />
            <SkillSets src={checkd} p="JavaScript"/>
            <SkillSets src={checkd} p="React JS"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
            <SkillSets src={checkd} p="React Router" />
            <SkillSets src={checkd} p="React Hooks" />
            <SkillSets src={checkd} p="React Query"/>
            <SkillSets src={checkd} p="Git"/>
            <SkillSets src={checkd} p="GitHub"/>
        </div>
   </section>
  )
}

export default Skills