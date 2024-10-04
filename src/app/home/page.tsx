'use client';
import styles from '../../index.module.css'
import { useSelector } from 'react-redux';
import {UserState} from "@/redux/userSlice";
import {Icon} from '@iconify/react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import Slider from '../../components/slider'

export default function Home(){
    const Navbar =()=>{
        const [isOpen, setOpen] = useState<boolean>(false)
        const user = useSelector((state:UserState) => state);
        console.log('user details',user);
        return (
            <div className={'flex justify-between bg-gray-200 px-[10px]'}>
                {isOpen && (
                    <Slider/>
                ) }
                <section className={'flex gap-[5px] justify-center items-center'}>
                    <Icon icon="noto:shopping-bags" width={30} height={30} />
                    <p>Handmade Bags</p>
                </section>
                <section>
                <div className="flex justify-center items-center" onClick={()=>{setOpen(!isOpen)}}>
                    <Hamburger toggle={setOpen} toggled={isOpen}/>
                    <Icon icon="carbon:shopping-cart" width={30} height={30} />
                </div>
                </section>
            </div>
          
        )
    }
    return (
        <div className={`${styles.slideIn}`}>
            <Navbar/>
        </div>
    )
}