import styles from '../css/Card.module.css';
import responsiveImg from '../assets/responsive-design.png';
import UI from '../assets/ui.png';
import Rocket from '../assets/rocket.png';
import Development from '../assets/development.png';
import MobileApp from '../assets/mobile-app.png';



function Card() {
  return (
    <>
      <div className={styles.card} style={{marginTop:'-30px'}}>
        <div className={styles.image}>
          <img src={responsiveImg} alt="responsive" />
        </div><hr />
        <div className={styles.content}>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card} style={{marginTop:'30px'}}>
        <div className={styles.image}>
          <img src={UI} alt="responsive" />
        </div><hr />
        <div className={styles.content}>
          <ul>
            <li>
              Android Xml Designing
            </li>
            <li>
              Java & Flutter
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.card} style={{marginTop:'-30px'}}>
        <div className={styles.image}>
          <img src={Development} alt="responsive" />
        </div><hr />
        <div className={styles.content}>
          <ul>
            <li>
              React JS
            </li>
            <li>
              Node JS
            </li>
            <li>
              Material UI
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.card}>
        <div className={styles.image}>
          <img src={MobileApp} alt="responsive" />
        </div><hr />
        <div className={styles.content}>

        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={Rocket} alt="responsive" />
        </div><hr />
        <div className={styles.content}>

        </div>
      </div> */}
    </>
  )
}

export default Card