import styles from './styles.module.scss'
const SingleProduct = ({item}) => {

    return(
        <div className={styles.Product}>
            <img src={item.category.image} alt={item.title}/>
            <div className={styles.description}>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </div>
           
        </div>
    )
}

export default SingleProduct;