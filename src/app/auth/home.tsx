import RegisterComponent from '../../components/register';
import styles from '../../index.module.css'
export default function Home(){
    return(
        <div className={`${styles.slideIn}`}>
            <RegisterComponent/>
        </div>
    )
}