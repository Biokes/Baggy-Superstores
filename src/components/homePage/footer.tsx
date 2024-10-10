'use client'
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function HomeFooter(){
    const style = 'text-xs sm:text-lg font-md hover:cursor-pointer';
    return (
        <div className={`flex flex-col mt-[10px]`}>
            <div className={'bg-gray-300 py-[18px] flex justify-center items-center gap-5'}>
                <Icon icon="hugeicons:tiktok" width={30} height={30}  style={{color:"black"}}/>
                <Icon icon="devicon:facebook" width={30} height={30}/>
                <Icon icon="hugeicons:new-twitter" width={30} height={30} style={{color:"black"}}/>
            </div>
            <div className={`justify-center items-center gap-6 md:gap-7 h-[40px] flex`}>
                <Link href={'/shippingCost'} className={style}>Shipping costs</Link>
                <Link href={'/privacy'} className={style}>Privacy policy</Link>
                <Link href={'/tcs'} className={style}>T&Cs</Link>
                <Link href={'/contact'} className={style}>Contact</Link>
            </div>
        </div>
    )
}