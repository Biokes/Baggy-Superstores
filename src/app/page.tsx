import RegisterComponent from '../components/register';
import styles from '../index.module.css'
import React from "react";
export default function Page(){
    return(
        <div className={`${styles.mainContainer} flex flex-col justify-center items-center `}>
                <RegisterComponent/>
        </div>
    )
}