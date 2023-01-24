import styles from './styles.module.scss'
const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.AboutUs}>
            <h3>About us </h3>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Velit corrupti voluptates unde eaque nihil magnam nam optio sint, 
            assumenda modi quae impedit aut corporis harum ipsa in itaque sunt excepturi.</p>
            </div>
           <div className={styles.carosel}>
            <h3>Discover our products</h3>
            <img src="https://picsum.photos/200/300" alt="prod" />
           </div>

        </div>
    )
}

export default Home ;