import { useEffect } from 'react';
import { useState } from 'react';
import { GET } from '../../utils/HTTTP';

import styles from './styles.module.scss'

import SingleProduct from '../singleProduct'; 


const Products = () => {
    const [product,setProduct]  = useState([]);
    const productUrl = 'https://api.escuelajs.co/api/v1/products'
    useEffect(()=>{
        GET(productUrl)
        .then((prod) =>setProduct (prod))
    }
    ,[])


    return (
        <div className={styles.Products}>
              {product.map((item) => (
                <SingleProduct item ={item} key={item.id}/>
              ))}             
        </div>
    )
}

export default Products;