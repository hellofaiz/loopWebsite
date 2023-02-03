import styles from '../css/Navbar.module.css'
import images from '../assets/L.png'

function NavBar() {
    return (
        <div className={styles.navbar} >
            <div className={styles.navLogo}>
                <img src={images} alt="Loop Developer Logo" />
            </div>
            <div className={styles.info}>
                <ul>
                    <li>
                        Home
                    </li>
                    <li>
                        Projects
                    </li>
                    <li>
                        Blogs
                    </li>
                    <li>
                        About us
                    </li>
                    <li>
                        Services
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;