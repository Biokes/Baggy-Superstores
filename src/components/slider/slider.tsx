'use client'
import styles from '../../styles/index.module.css';
import {useRouter} from "next/navigation";
import {useState} from "react";
import {SliderProps} from '@/interfaces/interfaces'

export default function Slider({props}: SliderProps){
    const [stylesState, setStyleState] = useState<string>(`${styles.hamburgerSlider}`)
    const list = [
        ['Home', '/'], ['New','/new'], ['Shopping bag', '/shopping'],
        ['Backpack bags', '/backpack'],['Cosmetic Bags', '/cosmetics'],
        ['About us', '/about'],['Contact','/contact']
    ]
        const router = useRouter();
    return (
            <ul className={stylesState}>
                {
                    list.map(([text,url],key)=>(
                        <li key={key} className={`list-none ${key == props ? 'text-green-400 bg-gray-700': 'hover:text-green-600 hover:bg-gray-70011'}
                         text-green-400 font-bold cursor-pointer text-lg py-[5px] w-full px-[10px]`}
                            onClick={()=>{
                                if(props!== key){
                                    setStyleState(`${styles.hamburgerSliderSlideOut}`)
                                    router.push(url)
                                    }

                                }}>
                            {text}
                        </li>
                    ))
                }
            </ul>
    )
}