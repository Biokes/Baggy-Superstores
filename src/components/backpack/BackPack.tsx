'use client'
import { BagDetails} from "@/interfaces/interfaces";
import Image from 'next/image';
import styles from '../../styles/index.module.css';
import small1 from '../../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../../assets/BAGS022-lu101neq.webp';
import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import Navbar from '@/components/homePage/navbar';
import { RootState } from "@/redux/store";
import { setBag } from '@/redux/bagSlice';
import Footer from '@/components/homePage/footer'
import Link from "next/link";
import {addItem} from "@/redux/cartSlice";
import {popItem} from '@/redux/cartSlice'
import {Button} from "@mui/material";

export default function BagPack() {
    const [isShowingCart, setShowCart] = useState<boolean>(false);
    const dispatch = useDispatch();
    const Component = () => {
        const productDescription = `Description of the product 
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
        const addToCart=()=>{
            if(isShowingCart){
                dispatch(addItem({quantity:1,bag:selectedBag}))
            }else{
                dispatch(popItem({quantity:1,bag:selectedBag}))
            }
        }

        return (
            <div>
                <Navbar props={9} />
                <div className={styles.gridContainer}>
                    <div className={styles.bagInfoImage}>
                        <Image src={selectedBag.image} alt='loading'/>
                    </div>
                    <div className={'md:order-2 md:col-span-1 md:flex md:flex-col'}>
                        <p className={`${styles.bestSellers}`}>Product Description</p>
                        <p className={styles.productDescription}>{productDescription}</p>
                    </div>
                    <div className={styles.priceAndStorename}>
                        <p className={styles.storename}>Store : {selectedBag.store}</p>
                        <p className={styles.storename}>Price : {selectedBag.price}</p>
                    </div>
                    <div className={`${styles.cartButton} ${isShowingCart?'':'text-gray-200'}`}>
                        <Button sx={{background:'#038F26',paddingInline:'25px',color:'#ffffff'}}
                                onClick={()=> {
                                    setShowCart(!isShowingCart);
                                    addToCart();
                        }}>
                            {!isShowingCart ? 'Add to cart' : 'Remove from cart'}
                        </Button>
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