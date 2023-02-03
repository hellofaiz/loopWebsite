import styles from '../css/Footer.module.css';


function Footer() {
    return (
        <div className={styles.footer}>

            <div className={styles.navMenu}>
                <ul>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>Project</li>
                </ul>
                <ul>
                    <li>Blog</li>
                </ul>
                <ul>
                    <li>About Us</li>
                </ul>
                <ul>
                    <li>Services</li>
                </ul>
            </div>
            <div className={styles.socialIcon}>
                <ul>
                    <li>
                        <i class="fa-solid fa-question-circle"></i>
                    </li>
                </ul>
                <ul>
                    <li>
                        Instagram
                    </li>
                </ul>
                <ul>
                    <li>
                        LinkedIn
                    </li>
                </ul>
                <ul>
                    <li>
                        Twitter
                    </li>
                </ul>
            </div>

            <div className={styles.copyRight}>
                <p>
                    © Copyright 2023 <span className={styles.loopText}><b>Loop Developer</b></span>. Made in 🖤 with Loop Developer.
                </p>
            </div>
        </div>
    )
}

export default Footer