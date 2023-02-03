import styles from '../css/WhyUsSection.module.css'
import work from '../assets/work.png'
import phoneImage from '../assets/app-phone2.png'

function WhyUsSection() {
    return (
        <div className={styles.whyUsSection}>
            <div className={styles.whySection}>
                <img src={work} alt="work" />
                <h1>Why Us</h1><br />
                <h3>We are startup and currently working in Delhi and Planning to expand in Varanasi. We have team of IITians and some expirienced professionals who have working expirience of more than 8+ years in startup domain as well as big companies like</h3>
            </div>
            <div className={styles.heroSection}>
                <img id={styles.phoneImage} src={phoneImage} alt="phoneImage" />
            </div>
        </div>
    )
}

export default WhyUsSection