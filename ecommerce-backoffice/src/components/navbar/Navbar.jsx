import styles from './styles.module.scss'
import { navbarLinks } from '../../constant/navbarLink';


const Navbar = ({setRoute}) => {
    
    return (
        <div className= {styles.Nav}>
            <ul>
                { navbarLinks.map((item) => (
                    <li onClick={() => setRoute(item.route)} key={item.id}><h1>{item.icon}</h1></li>
                ))}
            </ul>
        </div>
    )
};

export default Navbar;