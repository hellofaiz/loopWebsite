import styles from '../css/ProjectSection.module.css'
import Card from './Card'

function ProjectSection() {
    return (
        <div className={styles.countSection}>
            <h1>TECHNOLOGIES WE WORK ON</h1>
            <div className={styles.gridContainer}>
               
                <Card/>
               
               
            </div>
        </div>
    )
}

export default ProjectSection