'use client';
import styles from '../../index.module.css'
import HomeComponent from '../../components/homePage'
export default function Home(){
    
    return (
        <div className={`${styles.slideIn} lg:px-[20px] md:px-[10px]`}>
            <HomeComponent props={0}/>
        </div>
    )
}