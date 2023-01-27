
import styles from './styles.module.scss'

import Header from '../header';
import Home from '../home';
import ProductsContainer from '../productsContainer';
import LastMinute from '../LastMinute';
import Carrello from '../carrello';
import ContactUs from '../contactUs';

const Main = ({route}) => {
    return (
        <div className={styles.Main}>
            <Header />
            {route === 'home' && <Home /> } 
            {route === 'categories' && <ProductsContainer/> }
            {route === 'lastMinute' && <LastMinute  /> }   
            {route === 'carrello' && <Carrello /> }
            {route === 'contact' && <ContactUs /> }

            
             
        </div>
    )
} 

export default Main ;