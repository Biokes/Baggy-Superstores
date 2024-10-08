'use client'
import Bag1 from '../../assets/bags002.jpg'
import Bag2 from '../../assets/bags001.jpg'
import '../../index.module.css'
import {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../../index.module.css'

export default function HeroSection(){
    const [showFirst, setShowFirst] = useState<boolean>(false);
    const [isTransitioning, setIsTransitioning] = useState<boolean>(false); 

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setShowFirst((prev) => !prev);
        setIsTransitioning(false);
      }, 1000);
    }, 4000);
    return () => clearInterval(timer);
}, []);
    return (
        <div className={styles.collectionDiv}>
            <p className={styles.collectionText}>New Collections</p>
            <div className={`${styles.imageDiv}`}>
                {
                    showFirst?
                        <Image src={Bag1}
                        className={`${showFirst && !isTransitioning ? styles.fadeIn : styles.fadeOut}
                        transform hover:scale-250 translate-x-[-50px] w-[100%] h-[100%] 
                        md:translate-x-[-70px] overflow-hidden lg:scale-110 lg:translate-x-[-40%]`} alt=""/> :
                        <Image src={Bag2}
                        className={`${!showFirst && !isTransitioning ? styles.fadeIn : styles.fadeOut} 
                        w-[100%] h-[100%] transform scale-250 translate-x-[-50px] 
                        md:translate-x-[-30%] overflow-hidden  lg:scale-110`} alt=""/>
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