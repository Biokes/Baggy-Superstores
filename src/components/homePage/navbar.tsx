// 'use client';
// import styles from '@/styles/index.module.css'
// import { Icon } from '@iconify/react'
// import { useState } from 'react'
// import Hamburger from 'hamburger-react';
// import { useRouter } from 'next/navigation'
// import Slider from '../slider/slider'
// import { SliderProps } from '@/interfaces/interfaces'
// import Cart from '@/app/cart/page';

// export default function Navbar({ props }: SliderProps) {
//     const list = [
//         ['Home', '/home'], ['New', '/new'], ['Shopping bag', '/shopping'],
//         ['Backpack bags', '/backpack'], ['Cosmetic Bags', '/cosmetics'],
//         ['About us', '/about'], ['Contact', '/contact']
//     ]
//     const router = useRouter();
//     const [isOpen, setOpen] = useState<boolean>(false)
//     const [open, setIsOpen] = useState<boolean>(false)

    
//     return (
//         <div className={'flex justify-between bg-gray-300 px-[20px] relative py-[10px] w-full'}>
           
//             {isOpen && (
//                 <Slider props={props} />
//             )}
//             <section className={'flex gap-[5px] justify-center items-center'}>
//                 <Icon icon="noto:shopping-bags" width={30} height={30} />
//                 <p>Handmade Bags</p>
//             </section>
//             <ul className={`hidden lg:flex gap-[20px] ${styles.bottom}`}>
//                 {
//                     list.map(([text, url], index) => (
//                         <li key={index}
//                             className={`list-none ${index == props ? 'text-green-600' : 'text-gray-700'}
//                             hover:text-green-600 cursor-pointer font-thin text-md py-[5px]`}
//                             onClick={() => {
//                                 if (index !== props) {
//                                     router.push(url)
//                                 }
//                             }}>{text}</li>
//                     ))
//                 }
//             </ul>
//             <section>
//                 <div className={'flex justify-center items-center'}>
//                     <div className="flex justify-center items-center lg:hidden" onClick={() => {
//                         setOpen(!isOpen)
//                     }}>
//                         <Hamburger toggle={setOpen} toggled={isOpen} />
//                     </div>
//                     <Icon icon="carbon:shopping-cart" width={30} height={30} onClick={() => {
//                         setIsOpen(true)
//                     }} />
//                 </div>
//             </section>
//         </div>

//     )
// }
'use client';
import styles from '@/styles/index.module.css'
import { Icon } from '@iconify/react'
import { useState } from 'react'
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation'
import Slider from '../slider/slider'
import { SliderProps } from '@/interfaces/interfaces'
import Cart from '@/app/cart/page';

export default function Navbar({ props }: SliderProps) {
    const list = [
        ['Home', '/home'], ['New', '/new'], ['Shopping bag', '/shopping'],
        ['Backpack bags', '/backpack'], ['Cosmetic Bags', '/cosmetics'],
        ['About us', '/about'], ['Contact', '/contact']
    ]
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [cartOpen, setCartOpen] = useState<boolean>(false)

    const handleCartClose = () => {
        setCartOpen(false);
    }

    const Component = () => (
        <div className={'flex justify-between bg-gray-300 px-[20px] relative py-[10px] w-full'}>
            {isOpen && <Slider props={props} />}
            <section className={'flex gap-[5px] justify-center items-center'}>
                <Icon icon="noto:shopping-bags" width={30} height={30} />
                <p>Handmade Bags</p>
            </section>
            <ul className={`hidden lg:flex gap-[20px] ${styles.bottom}`}>
                {list.map(([text, url], index) => (
                    <li key={index}
                        className={`list-none ${index == props ? 'text-green-600' : 'text-gray-700'}
                        hover:text-green-600 cursor-pointer font-thin text-md py-[5px]`}
                        onClick={() => {
                            if (index !== props) {
                                router.push(url)
                            }
                        }}>{text}</li>
                ))}
            </ul>
            <section>
                <div className={'flex justify-center items-center'}>
                    <div className="flex justify-center items-center lg:hidden" onClick={() => {
                        setIsOpen(!isOpen)
                    }}>
                        <Hamburger toggle={setIsOpen} toggled={isOpen} />
                    </div>
                    <Icon icon="carbon:shopping-cart" width={30} height={30} onClick={() => {
                        setCartOpen(true)
                    }} />
                </div>
            </section>
        </div>
    );

    return (
        <>
            <Component />
            {cartOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-3/4 lg:w-1/3">
                        <button onClick={handleCartClose} className="text-gray-500 hover:text-gray-700">
                            Close
                        </button>
                        <Cart />
                    </div>
                </div>
            )}
        </>
    )
}
