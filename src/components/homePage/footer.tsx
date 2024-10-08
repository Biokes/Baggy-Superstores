import prototype1 from '../../assets/bags003JPG.jpeg'
import prototype2 from '../../assets/BAGS6548JPG.jpeg'
import styles from '@/index.module.css'
import {useState} from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
export default function Footer(){
    const [isClicked, setClicked] = useState<boolean>(false);
    <Icon icon="iconamoon:arrow-left-2-duotone" width="1.2rem" height="1.2rem" className="color: black"></Icon>
    const handleClick = ()=>{
        setClicked(!isClicked);
    }
    return (
        <div className={`${styles.footer} `}>
            <div>
                <Image src={isClicked?prototype1:prototype2} className={styles.footerImage} alt=''/>
            </div>
            <div className={styles.footerDiv2}>
                <Icon icon="iconamoon:arrow-left-2-duotone"  onClick={handleClick}
                    width={'30px'} height={'30px'}  style={{color: 'white'}}/>
                <Icon icon="iconamoon:arrow-right-2-duotone" onClick={handleClick}
                width={'30px'} height={'30px'} style={{color: "white"}}/>
            </div>         
        </div>
    )
}