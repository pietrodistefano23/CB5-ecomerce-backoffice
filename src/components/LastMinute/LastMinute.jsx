import styles from './styles.modules.scss'
import { useEffect } from 'react';
import { useState } from 'react';
import { GET } from '../../utils/HTTTP';

const LastMinute = () => {

const [product,setProduct]  = useState([]);
const productUrl = 'https://api.escuelajs.co/api/v1/products'
useEffect(()=>{
    GET(productUrl)
    .then((prod) =>setProduct (prod))
}
,[])


    return (
        <div className= {styles.LastMinute}>
           {product.map((item) => (
                <div>
                    {/* <img src={item.category.image} alt={item.title}/> */}
                    <div className={styles.description}>
                        <h4>{item.title}</h4>
                
                 </div>

                </div>
              ))}             

        </div>
    )
}

export default LastMinute ;