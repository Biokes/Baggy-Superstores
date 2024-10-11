'use client'
import { BagDetails } from "@/interfaces/interfaces";
import Image from 'next/image';
import styles from '../../styles/index.module.css';
import small1 from '../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../assets/BAGS022-lu101neq.webp';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import Navbar from '@/components/homePage/navbar';
import { RootState } from "@/redux/store";
import { setBag } from '@/redux/bagSlice'; 
import Footer from '@/components/homePage/footer'
import Link from "next/link";

export default function BagPack() {
    const [isShowingCart, setShowCart] = useState<boolean>(false);
    const dispatch = useDispatch();
    const Component = () => {
        const productdescription = `Description of the product 
                        Lorem ipsum dolor sit amet, erant saepe affert ex pro,
                        eos id disputando liberavisse. Cum cu reque putent feugait, 
                        per te quidam integre dolorum. Et unum honestatis vel. 
                        Ornatus minimum mentitum ex nam, vim cu apeirian instructior.`;


        const bagsPack: BagDetails[] = [
            { image: small1, store: 'Emily Bags', price: '$30' },
            { image: small2, store: 'Fav Bags', price: '$30' },
            { image: bag1, store: 'Catherine Bags', price: '$30' },
            { image: bag2, store: 'Mary Bags', price: '$30' }
        ];
 
        const selectedBag = useSelector((state: RootState) => state.bag);

        const handleClick = (bag: BagDetails) => {
            dispatch(setBag(bag));
        };

        return (
            <div>
                <Navbar props={9} />
                <div>
                    <div className={styles.bagInfoImage}>
                        <Image src={selectedBag.image} alt='loading' /> 
                    </div>
                    <p className={styles.bestSellers}>Description</p>
                    <p className={`px-[8px] md:px-[18px] sm:text-xl text-gray-600 py-[5px] md:text-2xl bg-gray-200`}>{productdescription}</p>
                    <div className={styles.priceAndStorename}>
                        <p className={styles.storename}>{selectedBag.store}</p>
                        <p className={styles.storename}>{selectedBag.price}</p>
                    </div>
                    <div className={'flex justify-center items-center my-[20px]'}>
                        <button  className={styles.cartButton} onClick={() => { setShowCart(!isShowingCart)}}>
                            {!isShowingCart ? 'Add to cart' : 'Remove from cart'}
                        </button>
                    </div>
                    
                </div>

                <p className={styles.bestSellers}>Best Sellers</p>
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
        );
    }

    return (
        <div>
            <Component/>
        </div>
    );
}
