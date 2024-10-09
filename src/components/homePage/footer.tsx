'use client'
import Link from 'next/link';
import {useState} from 'react';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function HomeFooter(){
    const [isClicked, setClicked] = useState<boolean>(false);
    <Icon icon="iconamoon:arrow-left-2-duotone" width="1.2rem" height="1.2rem" style={{color: 'black'}}/>

    const style = 'text-xs sm:text-lg md:text-2xl font-md hover:cursor-pointer';
    return (
        <div className={`flex flex-col mt-[10px]`}>
            <div className={'bg-gray-300 py-[18px] flex justify-center items-center gap-5'}>
                <Icon icon="hugeicons:tiktok" width={40} height={40}  style={{color:"black"}}/>
                <Icon icon="devicon:facebook" width={40} height={40}/>
                <Icon icon="hugeicons:new-twitter" width={40} height={40} style={{color:"black"}}/>
            </div>
            <div className={`justify-center items-center gap-6 md:gap-7 py-[15px] flex`}>
                <Link href={'/shippingCost'} className={style}>Shipping costs</Link>
                <Link href={'/privacy'} className={style}>Privacy policy</Link>
                <Link href={'/tcs'} className={style}>T&Cs</Link>
                <Link href={'/contact'} className={style}>Contact</Link>
            </div>
        </div>
    )
}