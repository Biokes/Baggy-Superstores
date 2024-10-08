'use client';
import styles from '@/index.module.css'
import {Icon} from '@iconify/react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import {useRouter } from 'next/navigation'
import Slider from '../slider'
import {SliderProps} from '@/interfaces/interfaces'
import HeroSection from './heroSection'
import BagCollection from '@/components/homePage/bagCollection'
import Footer from './footer'

export const Navbar =({props}:SliderProps)=>{
    const list = [
        ['Home', '/'], ['New','/new'], ['Shopping bag', '/shopping'],
        ['Backpack bags', '/backpack'],['Cosmetic Bags', '/cosmetics'],
        ['About us', '/about'],['Contact','/contact']
    ]

    const router = useRouter();
    const [isOpen, setOpen] = useState<boolean>(false)
    return (
        <div className={'flex justify-between bg-gray-300 px-[20px] relative py-[10px]'}>
            {isOpen && (
                <Slider props={props}/>
            )}
            <section className={'flex gap-[5px] justify-center items-center'}>
                <Icon icon="noto:shopping-bags" width={30} height={30}/>
                <p>Handmade Bags</p>
            </section>
            <ul className={`hidden lg:flex gap-[20px] ${styles.bottom}`}>
                {
                    list.map(([text, url], index) => (
                        <li key={index}
                            className={`list-none ${index == props ? 'text-green-600' :'text-gray-700' }
                            hover:text-green-600 cursor-pointer font-thin text-md py-[5px]`}
                            onClick={()=>{
                                if(index ===props) {
                                    router.push(url)
                                }
                            }}>{text}</li>
                    ))
                }
            </ul>
            <section>
                <div className={'flex justify-center items-center'}>
                    <div className="flex justify-center items-center lg:hidden" onClick={() => {
                        setOpen(!isOpen)
                    }}>
                        <Hamburger toggle={setOpen} toggled={isOpen}/>
                    </div>
                    <Icon icon="carbon:shopping-cart" width={30} height={30}/>
                </div>
            </section>
        </div>

    )
}

export default function  HomeComponent({props}:SliderProps){
    return (
        <div className={`${styles.slideIn}`}>
            <Navbar props={props}/>
            <HeroSection/>
            <BagCollection/>
            <Footer/>
        </div>
    )
}