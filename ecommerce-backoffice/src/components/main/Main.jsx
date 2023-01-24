import styles from './styles.module.scss'
import Header from '../header';
import Home from '../home';
import ProductsList from '../productsList';
import Carrello from '../carrello';
import ContactUs from '../contactUs';
const Main = ({route}) => {

    return (
        <div className={styles.Main}>
            <Header />
            {console.log(route)}
            {route === 'home' && <Home /> } 
            {route === 'products' && <ProductsList /> }
            {route === 'lastMinute' && <ProductsList /> }   
            {route === 'carrello' && <Carrello /> }
            {route === 'contact' && <ContactUs /> }

            
             
        </div>
    )
} 

export default Main ;