import small1 from '../../assets/BAGS015-lu101mjc.webp'
import bag6 from '../../assets/BAGS008-lu101nvj.webp'
import bag1 from '../../assets/BAGS11-lu101ode.webp'
import bag2 from '../../assets/BAGS022-lu101neq.webp'
import bag3 from '../../assets/BAGS020-lu101o3d.webp'
import bag4 from '../../assets/BAGS025-lu101ol1.webp'
import bag5 from '../../assets/BAGS014-lu101n4m.webp'
import small2 from '../../assets/BAGS012-lu101osh.webp'
import Image from 'next/image'
import {BagDetails} from '@/interfaces/interfaces'
import styles from '../../index.module.css'

export default function BagCollection(){
    const bagsPack: BagDetails[] = [
        {image:small1,storename:'Emily Bags',price:'$30'},
         {image:small2,storename:'Fav Bags',price:'$30'},
        {image:bag1,storename:'Catherin Bags',price:'$30'},
        {image:bag2,storename:'Mary Bags',price:'$30'},
        {image:bag3,storename:'Rite Bags',price:'$30'},
        {image:bag4,storename:'Jenny Bags',price:'$30'},
        {image:bag5,storename:'Lily Bags',price:'$30'},
        {image:bag6,storename:'Rose Bags',price:'$30'}
    ]
    return (
        <div className={styles.backPack}>
            {
                bagsPack.map((bag,index)=>(
                    <div key={index}>
                        <div className={styles.bagImages}>
                            <Image src={bag.image} alt=''/>
                        </div>
                        <p className={styles.storename}>{bag.storename}</p>
                        <p className={styles.storeText}>{bag.price}</p>
                    </div>
                ))
            }
        </div>
    )
}