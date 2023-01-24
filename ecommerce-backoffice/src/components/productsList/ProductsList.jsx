import styles from './styles.module.scss'
import { GET } from '../../utils/HTTTP';
const ProductsList = () => {
    const baseUrl = "https://api.escuelajs.co/api/v1/products?limit=80&offset=80ttps://api.escuelajs.co/api/v1/";

    return (
        <div className={styles.ProductsList}>
            <h3>Products</h3>
            {/* { GET (baseUrl) 
            .then((res) => console.log(res))} */}
        </div>
    )
}

export default ProductsList;