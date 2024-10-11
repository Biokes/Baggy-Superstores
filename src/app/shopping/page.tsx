'use client'

import { useDispatch } from "react-redux"
import Navbar from '@/components/homePage/navbar';
import styles from '@/styles/index.module.css'
import small1 from '../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../assets/BAGS022-lu101neq.webp';
import bag3 from '../../assets/BAGS020-lu101o3d.webp';
import bag4 from '../../assets/BAGS025-lu101ol1.webp';
import bag5 from '../../assets/BAGS014-lu101n4m.webp';
import bag6 from '../../assets/BAGS008-lu101nvj.webp';
import bag7 from '@/assets/BAGS021-lu101m39.webp'
import bag8 from '../../assets/BAGS012-lu101map.webp';
import bag9 from '../../assets/BAGS012-lu101osh (1).webp';
import bag10 from '../../assets/BAGS015-lu101mjc (1).webp';
import { BagDetails } from "@/interfaces/interfaces";
import { setBag } from "@/redux/bagSlice";
import Image from 'next/image';
import Footer from '@/components/homePage/footer';
import Link from 'next/link'

export default function Shopping(){
    const dispatch = useDispatch()
    const handleClick = (bag: BagDetails) => {
        dispatch(setBag(bag));
    };
    const bagsPack=[
        {image:small1,store:'Emily Bags',price:'$30'},
        {image:small2,store:'Fav Bags',price:'$30'},
        {image:bag1,store:'Catherine Bags',price:'$30'},
        {image:bag2,store:'Mary Bags',price:'$30'},
        {image:bag3,store:'Rite Bags',price:'$30'},
        {image:bag4,store:'Jenny Bags',price:'$30'},
        {image:bag5,store:'Lily Bags',price:'$30'},
        {image:bag6,store:'Rose Bags',price:'$30'},
        {image:bag7, store:'covered bags', price: '$80'},
        {image:bag8,store:'maven bags', price:'$40'},
        {image:bag9, store:'Baggy bags', price:'$60'},
        {image:bag10, store:'Suzzy bags', price:'$25'}
    ]
    return (
        <div>
            <Navbar props={2}/>
            <p className={`mt-[20px] ${styles.bestSellers}`}>Shopping Bags</p>
            <div className={`${styles.backPack}`}>
                {
                    bagsPack.map((bag, index) => (
                        <Link key={index} className={`sm:order-${index + 1}`}
                            onClick={() => handleClick(bag)} href={'/backpack'}>
                            <div className={`__zoom-enter ${styles.bagImages}`}>
                                <Image src={bag.image} className={`${styles.images} __zoom-enter`} alt='' />
                            </div>
                            <p className={styles.storename}>{bag.store}</p>
                            <p className={styles.storeText}>{bag.price}</p>
                        </Link>
                    ))
                }
            </div>
                <Footer/>
        </div>
    )
}