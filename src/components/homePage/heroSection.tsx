'use client'
import Bag1 from '../../assets/bags002.jpg'
import Bag2 from '../../assets/bags001.jpg'
import '../../index.module.css'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../index.module.css'

export default function HeroSection(){
    const [showFirst, setShowFirst] = useState<boolean>(false)
    useEffect(()=>{
    const timer = setInterval(() => {
        setShowFirst((showFirst) => !showFirst);
    }, 4500);
    return () => clearTimeout(timer);
}, []);
    return (
        <div className={styles.collectionDiv}>
            <p className={styles.collectionText}>New Collections</p>
            <div className={`${styles.imageDiv}`}>
                {
                    showFirst?
                        <Image src={Bag1}
                        className={`${showFirst?styles.slideIn: styles.hamburgerSliderSlideOut} 
                        transform hover:scale-250 translate-x-[-50px] w-[full] h-[100%]`} alt=""/> :
                        <Image src={Bag2}
                        className={`${showFirst?styles.slideIn: styles.hamburgerSliderSlideOut} 
                        w-[100%] h-[100%] transform scale-250 translate-x-[-50px]`} alt=""/>
                }
            </div>
            <p className={styles.text}>
                The highest quality products, sewn in Ireland from Irish materials.
                Quality and durability for years.
            </p>
            <button className={styles.collectionButton}>New Collection</button>
        </div>
    )
}