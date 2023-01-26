import { useState } from 'react';

import styles from './styles.module.scss'

import CategoriesList from '../CategoriesList/CategoriesList';
import Products from '../Products/Products';

const ProductsContainer = () =>{
   const [renderProducts,setRenderProducts] = useState(false)
    return(
        <div className={styles.ProductsContainer}>
            
            {renderProducts === false && <CategoriesList setRenderProducts={setRenderProducts}/>}
            {renderProducts === true && <Products />}
        </div>
    )
}

export default ProductsContainer;