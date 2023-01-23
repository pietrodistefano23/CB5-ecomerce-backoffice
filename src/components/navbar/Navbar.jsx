import styles from './styles.module.scss'
const Navbar = () => {
    const navbarLinks = [
        {
            label : 'Home',
            route : 'home',
        },
        {
            label : 'Products',
            route : 'products',
        },
        {
            label : 'Last Minute',
            route : 'lastMinute',
        },
        {
            label : 'Carrello',
            route : 'carrello',
        },
        
        {
            label : 'Contact',
            route : 'contact',
        }
        
    ];
    
    return (
        <div className= {styles.Nav}>
            <ul>
                { navbarLinks.map((item) => (
                    <li>{item.label}</li>
                ))}
            </ul>
        </div>
    )
};

export default Navbar;