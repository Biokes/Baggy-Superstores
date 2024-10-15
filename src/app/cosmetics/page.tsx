'use client';
import {BagDetails} from '@/interfaces/interfaces';
import small1 from '../../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../../assets/BAGS012-lu101osh.webp';
import Navbar from  '@/components/homePage/navbar'
import Footer from '@/components/homePage/footer';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/index.module.css'
import {useDispatch} from 'react-redux';
import {setBag} from '@/redux/bagSlice';

export default function Cosmetics(){
    const bagsPack:BagDetails[] = [
        { image: small1, store: 'Emily Bags', price: '$30' },
        { image: small2, store: 'Fav Bags', price: '$30' },
        { image: small1, store: 'Emily Bags', price: '$30' },
        { image: small2, store: 'Fav Bags', price: '$30' },
    ];
    const dispatch = useDispatch()
    const handleClick=(bag:BagDetails)=>{
        dispatch(setBag(bag))
    }
    return (
        <div className={'flex flex-col justify-between md:h-[100vh]'}>
            <div className={styles.slideIn}>
                <Navbar props={4}/>
                    <p className={`mt-[20px] ${styles.bestSellers}`}>Cosmetics Bags</p>
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
            </div>
            
                <Footer/>
        </div>
    )
}