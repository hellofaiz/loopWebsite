import styles from '../css/WorkSection.module.css'
import HomepageUI from '../assets/HomepageUI.png'
import designing from '../assets/website-designing.jpg'



function WorkSection() {
  return (
    <div className={styles.workSection}>
      <div className={styles.info}>
        <h1>AMAZING APPS AND WEBSITES...</h1>
      </div>
      <div className={styles.image}>
        <p>
          Bringing your ideas to life, with the power of the loop
        </p>
        <div className={styles.picContainer}>
          <div className={styles.designing}>
            <img id={styles.designing} src={designing} alt="HomepageUI" />
          </div>
          <div className="homepageUI">
            <img id={styles.homepageUI} src={HomepageUI} alt="HomepageUI" />

          </div>

        </div>
      </div>
    </div>
  )
}


export default WorkSection