'use client'
import { BagDetails } from "@/interfaces/interfaces";
import Image from 'next/image';
import styles from '../../index.module.css';
import small1 from '../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../assets/BAGS022-lu101neq.webp';
import { useSelector } from "react-redux";

export default function BagInfo(){
    const productdescription = `Description of the product 
                        Lorem ipsum dolor sit amet,
                        erant saepe affert ex pro,
                        eos id disputando liberavisse.
                        Cum cu reque putent feugait, 
                        per te quidam integre dolorum. 
                        Et unum honestatis vel. 
                        Ornatus minimum mentitum ex nam,
                        vim cu apeirian instructior. `;
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
        {image:small1,storename:'Emily Bags',price:'$30'},
        {image:small2,storename:'Fav Bags',price:'$30'},
        {image:bag1,storename:'Catherine Bags',price:'$30'},
        {image:bag2,storename:'Mary Bags',price:'$30'}
    ]
    const data = useSelector((state: BagDetails)=>state)
    console.log(data.storename,console.log(data.price))
    return(
        <div>
            <div>
                <Image src={data.image} alt=''/>
            </div>
            <p>{data.storename}</p>
            <p>{data.price}</p>
            <p>
                {productdescription}
            </p>
            <button>Add to cart</button>
            <p>Description</p>
            <p>{description}</p>
            <p className={styles.bestSellers}>Best Sellers</p>
            <div className={`${styles.backPack}`}>
            {
                bagsPack.map((bag,index)=>(
                    <div key={index} className={`sm:order-${index+1}`}>
                        <div className={`__zoom-enter ${styles.bagImages}`} >
                            <Image src={bag.image} className={`${styles.images} __zoom-enter`} alt=''/>
                        </div>
                        <p className={styles.storename}>{bag.storename}</p>
                        <p className={styles.storeText}>{bag.price}</p>
                    </div>
                ))
            }
        </div>
        </div>
    )
}