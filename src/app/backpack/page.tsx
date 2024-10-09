'use client'
import { BagDetails } from "@/interfaces/interfaces";
import Image from 'next/image';
import styles from '../../styles/index.module.css';
import small1 from '../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../assets/BAGS022-lu101neq.webp';
import { useSelector } from "react-redux";
import {useState} from 'react';
import Navbar from '@/components/homePage/navbar';

export default function BagPack(){
    const [isShowingCart , setShowCart] = useState<boolean>(false)
    const Component =()=>{
        const productdescription = `Description of the product 
                        Lorem ipsum dolor sit amet,
                        erant saepe affert ex pro,
                        eos id disputando liberavisse.
                        Cum cu reque putent feugait, 
                        per te quidam integre dolorum. 
                        Et unum honestatis vel. 
                        Ornatus minimum mentitum ex nam,
                        vim cu apeirian instructior.`;
    const description = `Lorem ipsum dolor sit amet, 
                        erant saepe affert ex pro, 
                        eos id disputando liberavisse. 
                        Cum cu reque putent feugait, 
                        per te quidam integre dolorum. 
                        Et unum honestatis vel. 
                        Ornatus minimum mentitum ex nam, 
                        vim cu apeirian instructior. 
                        Has at tibique reformidans, 
                        usu no expetenda interpretaris, 
                        tamquam habemus nominavi vix an. 
                        Sensibus consulatu ne quo, 
                        explicari efficiantur an duo.`
    const bagsPack: BagDetails[] = [
        {image:small1,store:'Emily Bags',price:'$30'},
        {image:small2,store:'Fav Bags',price:'$30'},
        {image:bag1,store:'Catherine Bags',price:'$30'},
        {image:bag2,store:'Mary Bags',price:'$30'}
    ]
    const data = useSelector((state: BagDetails)=>state)
    console.log(data.store,' : ',data.price);
    return(
        <div>
            <Navbar props={0}/>
            <div>
                <div className={styles.BagInfoImage}>
                    <Image src={data.image} alt='loading'/>
                </div>
                <p>{data.store}</p>
                <p>{data.price}</p>
                <p className={`px-[8px]`}>{productdescription}</p>
                <div className={styles.collectionButton} onClick={()=>{setShowCart(!isShowingCart)}}>
                    {!isShowingCart? 'Add to cart' : 'Remove from cart'}    
                </div>
            </div>
           
            <p className={styles.description}>Description</p>
            <p className={`px-[8px]`}>{description}</p>
            <p className={styles.bestSellers}>Best Sellers</p>
            <div className={`${styles.backPack}`}>
                {
                    bagsPack.map((bag,index)=>(
                        <div key={index} className={`sm:order-${index+1}`}>
                            <div className={`__zoom-enter ${styles.bagImages}`} >
                                <Image src={bag.image} className={`${styles.images} __zoom-enter`} alt=''/>
                            </div>
                            <p className={styles.storename}>{bag.store}</p>
                            <p className={styles.storeText}>{bag.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
    }
    return (
        <div className={'flex flex-col'}>
            <Component/>
        </div>
    )
}