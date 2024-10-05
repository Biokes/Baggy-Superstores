'use client';
import styles from '../../index.module.css'
import { useSelector } from 'react-redux';
import {UserState} from "@/redux/userSlice";
import {Icon} from '@iconify/react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import {useRouter } from 'next/navigation'
import Slider from '../slider'
import {SliderProps} from "@/components/slider";
import HeroSection from './heroSection'
import BagCollection from '../../components/homePage/bagCollection'

export default function  HomeComponent({props}:SliderProps){

    const Navbar =()=>{
        const list = [
            ['Home', '/'], ['New','/new'], ['Shopping bag', '/shopping'],
            ['Backpack bags', '/backpack'],['Cosmetic Bags', '/cosmetics'],
            ['About us', '/about'],['Contact','/contact']
        ]

        const router = useRouter();
        const [isOpen, setOpen] = useState<boolean>(false)
        const user = useSelector((state:UserState) => state);
        console.log('user details',user);
        return (
            <div className={'flex justify-between bg-gray-300 px-[-20px] relative py-[10px]'}>
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
                                className={`list-none ${index == props ? 'text-green-600' : 'hover:text-green-600'}
                                text-green-400 cursor-pointer font-thin text-md py-[5px]`}
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

    return (
        <div className={`${styles.slideIn}`}>
            <Navbar/>
            <HeroSection/>
            <BagCollection/>
        </div>
    )
}