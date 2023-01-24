import styles from './styles.module.scss'
import { DiRuby } from "react-icons/di";


 const Header = () => {
    return (
        <div className={styles.Header}>
                <div className={styles.logo}>
                    <h1><DiRuby /></h1>
                    <span> Title</span>
                </div>
        </div>
    )
 }

 export default Header;