import RegisterComponent from '../components/register';
import styles from '../../src/index.module.css'
export default function Register(){
    return(
        <div className={`${styles.slideIn}`}>
            <RegisterComponent/>
        </div>
    )
}