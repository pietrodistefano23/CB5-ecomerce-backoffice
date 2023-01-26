import styles from './styles.module.scss'
import { GET } from '../../utils/HTTTP';
import { useState } from 'react';
import { useEffect } from 'react';
const CategoriesList = ({setRenderProducts}) => {
    const categoriesUrl = "https://api.escuelajs.co/api/v1/categories?limit=20";
    const productsUrl = "https://api.escuelajs.co/api/v1/products?limit=100&offset=100"
    
    const [categories, setCategories] = useState([])

    useEffect (() =>{
        GET (categoriesUrl) 
        .then ((category) => setCategories(category))
    },[])
    
    
    
    return (
        <div className={styles.CategoriesList}>
            <h3>OUR CATEGORIES</h3>
            <div className={styles.container}>
            {categories.map((item) => (
            <div className={styles.category} onClick = {() => setRenderProducts(true)}>
                <img src={ item.image} alt={item.name} key ={item.id} />
                <span>{item.name}</span>
            </div> ))}
            </div>
          
        </div>

) }


export default CategoriesList; 