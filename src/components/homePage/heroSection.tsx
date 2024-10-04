'use client'
import Bag1 from '../../assets/bags002.jpg'
import Bag2 from '../../assets/bags001.jpg'
import '../../index.module.css'
import {useState, useEffect} from 'react'
import Image from 'next/image'

export default function HeroSection(){
    const [showFirst, setShowFirst] = useState<boolean>(false)
    useEffect(()=>{
    const timer = setTimeout(() => {
        setShowFirst((showFirst) => !showFirst);
    }, 4500);
    return () => clearTimeout(timer);
}, []);
    return (
        <div>
            <p>New Collections</p>
            <Image src={showFirst?`${Bag1}`:`${Bag2}` } alt=""/>
        </div>
    )
}