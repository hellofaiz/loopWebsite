import styles from '../css/MainSection.module.css'
// import images from '../assets/main.jpg'
import loop from '../assets/loopGif.gif'
function MainSection() {
    return (
        <div className={styles.mainSection}>
            <div className={styles.infoSection}>
                <h1 className={styles.heading}>Unleash the Power of Development <br/> with Loop Developers</h1><br />
            </div>
            <div className={styles.imageSection}>
                <img src={loop} alt="Main Section" />
            </div>
        </div>
    )
}

export default MainSection