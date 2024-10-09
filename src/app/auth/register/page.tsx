import RegisterComponent from '../../../components/auth/register';
import styles from '../../../styles/index.module.css'
import React from "react";
export default function Page(){
    return(
        <div className={`${styles.mainContainer} flex flex-col justify-center items-center `}>
                <RegisterComponent/>
        </div>
    )
}