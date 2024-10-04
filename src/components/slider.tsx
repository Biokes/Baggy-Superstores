'use client'
import styles from '../index.module.css';
import {useRouter} from "next/navigation";
export interface SliderProps{
    props:number
}
export default function Slider({props}: SliderProps){
    const list = [
        ['Home', '/'], ['New','/new'], ['Shopping bag', '/shopping'],
        ['Backpack bags', '/backpack'],['Cosmetic Bags', '/cosmetics'],
        ['About us', '/about'],['Contact','/contact']
    ]
        const router = useRouter();
    return (
            <ul className={styles.hamburgerSlider}>
                {
                    list.map(([text,url],key)=>(
                        <li key={key} className={`list-none ${key == props ? 'text-green-400': 'hover:text-green-600'}
                         text-green-400 font-bold cursor-pointer text-lg py-[5px] `}
                            onClick={()=>{
                                if(props!== key){
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