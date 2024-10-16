// 'use client';
// import styles from '@/styles/index.module.css';
// import { Icon } from '@iconify/react';
// import React, { useState } from 'react';
// import Hamburger from 'hamburger-react';
// import { useRouter } from 'next/navigation';
// import Slider from '../slider/slider';
// import { SliderProps } from '@/interfaces/interfaces';
// import Cart from '@/app/cart/page';
// import { useDispatch, useSelector } from 'react-redux';
// import { offRed } from '@/redux/cartSlice';
// import { RootState } from '@/redux/store';
//
// const PopRed: React.FC<{ isRed: boolean }> = ({ isRed }) => (
//     isRed ? (
//         <div
//             className="absolute top-0 right-0 w-[10px] h-[10px] rounded-full"
//             style={{ backgroundColor: '#f20202' }}
//         />
//     ) : null
// );
//
// export default function Navbar({ props }: SliderProps) {
//     const router = useRouter();
//     const [isOpen, setIsOpen] = useState<boolean>(false);
//     const [cartOpen, setCartOpen] = useState<boolean>(false);
//     const selector = useSelector((state: RootState) => state.cart);
//     const isRed = selector.isRed;
//     const dispatch = useDispatch();
//
//     const list = [
//         ['Home', '/home'], ['New', '/new'], ['Shopping bag', '/shopping'],
//         ['Backpack bags', '/backpack'], ['Cosmetic Bags', '/cosmetics'],
//         ['About us', '/about'], ['Contact', '/contact']
//     ];
//
//     const Component = () => (
//         <div className="flex justify-between bg-gray-300 px-[25px] relative py-[10px] w-full">
//             {isOpen && <Slider props={props} />}
//             <section className="flex gap-[5px] justify-center items-center">
//                 <Icon icon="noto:shopping-bags" width={30} height={30} />
//                 <p>Handmade Bags</p>
//             </section>
//             <ul className={`hidden lg:flex gap-[20px] ${styles.bottom}`}>
//                 {list.map(([text, url], index) => (
//                     <li
//                         key={index}
//                         className={`list-none ${index === props ? 'text-green-600' : 'text-gray-700'}
//               hover:text-green-600 cursor-pointer font-thin text-md py-[5px]`}
//                         onClick={() => {
//                             if (index !== props) router.push(url);
//                         }}
//                     >
//                         {text}
//                     </li>
//                 ))}
//             </ul>
//             <section className="flex items-center gap-[10px]">
//                 <div
//                     className="lg:hidden"
//                     onClick={() => setIsOpen(!isOpen)}
//                 >
//                     <Hamburger toggle={setIsOpen} toggled={isOpen} />
//                 </div>
//                 <div className="relative">
//                     <PopRed isRed={isRed} />
//                     <Icon
//                         icon="carbon:shopping-cart"
//                         width={35}
//                         height={35}
//                         data-testid="cart-icon"
//                         onClick={() => {
//                             dispatch(offRed());
//                             setCartOpen(true);
//                         }}
//                     />
//                 </div>
//             </section>
//         </div>
//     );
//
//     return (
//         <>
//             <Component />
//             {cartOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
//                     <div className="bg-white p-6 rounded-md shadow-md w-3/4 lg:w-1/3">
//                         <Cart />
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// }
'use client';
import styles from '@/styles/index.module.css'
import { Icon } from '@iconify/react'
import React, { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation'
import Slider from '../slider/slider'
import { SliderProps } from '@/interfaces/interfaces'
import Cart from '@/app/cart/page';
import { useDispatch, useSelector } from 'react-redux'
import { offRed } from '@/redux/cartSlice';
import { RootState } from '@/redux/store';

const PopRed: React.FC<{ isRed: boolean }> = ({ isRed }) => {
    return isRed ? (
        <div>
            <Icon icon="fa:circle" width={10} height={10} style={{ color: "#f20202" }} />
        </div>
    ) : null;
};

export default function Navbar({ props }: SliderProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);

    const selector = useSelector((state: RootState) => state.cart);
    const isRed = selector.isRed;
    const dispatch = useDispatch();

    useEffect(() => {
        if (isRed) {
            console.log("Red icon activated");
        }
    }, [isRed]);

    const Component = () => (
        <div className="flex justify-between bg-gray-300 px-[25px] relative py-[10px] w-full">
            {isOpen && <Slider props={props} />}
            <section className="flex gap-[5px] justify-center items-center">
                <Icon icon="noto:shopping-bags" width={30} height={30} />
                <p>Handmade Bags</p>
            </section>

            <ul className={`hidden lg:flex gap-[20px] ${styles.bottom}`}>
                {[
                    ['Home', '/home'],
                    ['New', '/new'],
                    ['Shopping bag', '/shopping'],
                    ['Backpack bags', '/backpack'],
                    ['Cosmetic Bags', '/cosmetics'],
                    ['About us', '/about'],
                    ['Contact', '/contact'],
                ].map(([text, url], index) => (
                    <li
                        key={index}
                        className={`list-none ${
                            index === props ? 'text-green-600' : 'text-gray-700'
                        } hover:text-green-600 cursor-pointer font-thin text-md py-[5px]`}
                        onClick={() => {
                            if (index !== props) router.push(url);
                        }}
                    >
                        {text}
                    </li>
                ))}
            </ul>

            <section>
                <div className="flex justify-center items-center gap-[10px]">
                    <div
                        className="flex justify-center items-center lg:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <Hamburger toggle={setIsOpen} toggled={isOpen} />
                    </div>
                    <div className="flex relative">
                        <div className="absolute mr-[50%]">
                            <PopRed isRed={isRed} />
                        </div>
                        <div className="relative justify-center items-center">
                            <Icon
                                icon="carbon:shopping-cart"
                                width={35}
                                height={35}
                                data-testid="cart-icon"
                                onClick={() => {
                                    dispatch(offRed());
                                    setCartOpen(true);
                                }}
                            />
                        </div>
                    </div>
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
                        <Cart />
                    </div>
                </div>
            )}
        </>
    );
}
