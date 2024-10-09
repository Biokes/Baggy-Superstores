'use client';
import styles from '../../styles/index.module.css';
import Navbar from '@/components/homePage/navbar';
import HeroSection from '@/components/homePage/heroSection'
import BagCollection from '@/components/homePage/bagCollection'
import HomeFooter from '@/components/homePage/footer'
export default function  Home(){
    return (
        <div className={`${styles.slideIn}`}>
            <Navbar props={0}/>
            <HeroSection/>
            <BagCollection/>
            <HomeFooter/>
        </div>
    )
}