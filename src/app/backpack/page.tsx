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


export default function BagPack() {
    const [isShowingCart, setShowCart] = useState<boolean>(false);
    const dispatch = useDispatch();

    const Component = () => {
        const productdescription = `Description of the product 
                        Lorem ipsum dolor sit amet, erant saepe affert ex pro,
                        eos id disputando liberavisse. Cum cu reque putent feugait, 
                        per te quidam integre dolorum. Et unum honestatis vel. 
                        Ornatus minimum mentitum ex nam, vim cu apeirian instructior.`;

        const description = `Lorem ipsum dolor sit amet, erant saepe affert ex pro, 
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
                    <div className={styles.BagInfoImage}>
                        <Image src={selectedBag.image} alt='loading' /> 
                    </div>
                    <div className={'flex md:flex-col justify-between items-center md:block b md:gap-5'}>
                        <p className={'justify-center items-start'}>Store name: {selectedBag.store}</p>
                        <p>Price: {selectedBag.price}</p>
                    </div>
                    <p className={`px-[8px]`}>{productdescription}</p>
                    <div className={styles.collectionButton} onClick={() => { setShowCart(!isShowingCart)}}>
                        {!isShowingCart ? 'Add to cart' : 'Remove from cart'}
                    </div>
                </div>

                <p className={styles.description}>Description</p>
                <p className={`px-[8px]`}>{description}</p>
                <p className={styles.bestSellers}>Best Sellers</p>
                <div className={`${styles.backPack}`}>
                    {
                        bagsPack.map((bag, index) => (
                            <div key={index} className={`sm:order-${index + 1}`}
                                onClick={() => handleClick(bag)} >
                                <div className={`__zoom-enter ${styles.bagImages}`}>
                                    <Image src={bag.image} className={`${styles.images} __zoom-enter`} alt='' />
                                </div>
                                <p className={styles.storename}>{bag.store}</p>
                                <p className={styles.storeText}>{bag.price}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }

    return (
        <div>
            <Component/>
        </div>
    );
}
