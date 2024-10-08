import small1 from '../../assets/BAGS015-lu101mjc.webp';
import small2 from '../../assets/BAGS012-lu101osh.webp';
import bag1 from '../../assets/BAGS11-lu101ode.webp';
import bag2 from '../../assets/BAGS022-lu101neq.webp';
import bag3 from '../../assets/BAGS020-lu101o3d.webp';
import bag4 from '../../assets/BAGS025-lu101ol1.webp';
import bag5 from '../../assets/BAGS014-lu101n4m.webp';
import bag6 from '../../assets/BAGS008-lu101nvj.webp';
import bag7 from '../../assets/BAGS021-lu101m39.webp';
import bag8 from '../../assets/BAGS012-lu101map.webp';
import bag9 from '../../assets/BAGS012-lu101osh (1).webp';
import bag10 from '../../assets/BAGS015-lu101mjc (1).webp';
import Image from 'next/image';
import {BagDetails} from '@/interfaces/interfaces';
import styles from '../../index.module.css';
import {useRouter} from 'next/router';
import { useDispatch } from 'react-redux';
import {setBag} from '../../redux/bagSlice';

export default function BagCollection(){
        const bagsPack: BagDetails[] = [
            {image:small1,storename:'Emily Bags',price:'$30'},
            {image:small2,storename:'Fav Bags',price:'$30'},
            {image:bag1,storename:'Catherine Bags',price:'$30'},
            {image:bag2,storename:'Mary Bags',price:'$30'},
            {image:bag3,storename:'Rite Bags',price:'$30'},
            {image:bag4,storename:'Jenny Bags',price:'$30'},
            {image:bag5,storename:'Lily Bags',price:'$30'},
            {image:bag6,storename:'Rose Bags',price:'$30'},
            {image:bag7, storename:'covered bags', price: '$80'},
            {image:bag8,storename:'mave bags', price:'$40'},
            {image:bag9, storename:'Baggy bags', price:'$60'},
            {image:bag10, storename:'Baggy bags', price:'$25'}
        ]
    const  Route= (index:number)=>{
        const router = useRouter();
        const  dispatch = useDispatch()
        dispatch(setBag(bagsPack[index]))
        router.push('/backpack');

    }
    return (
        <div className={`${styles.backPack}`}>
            {
                bagsPack.map((bag,index)=>(
                    <div key={index} className={`sm:order-${index+1}`} >
                        <div className={`__zoom-enter ${styles.bagImages}`} onClick={()=>{Route(index)}}>
                            <Image src={bag.image} className={`${styles.images} __zoom-enter`} alt=''/>
                        </div>
                        <p className={styles.storename}>{bag.storename}</p>
                        <p className={styles.storeText}>{bag.price}</p>
                    </div>
                ))
            }
        </div>
    )
}