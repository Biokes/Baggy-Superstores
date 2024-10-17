'use client';
import styles from '@/styles/index.module.css';
import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import { useRouter } from 'next/navigation';
import Slider from '../slider/slider';
import { SliderProps } from '@/interfaces/interfaces';
import Cart from '@/app/cart/page';
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { RootState } from '@/redux/store';

export default function Navbar({ props }: SliderProps) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [cartOpen, setCartOpen] = useState<boolean>(false);
    const numberOfCartItems = useSelector((state: RootState) => state.cart.cart.length);
    const handleNavigation = (url: string) => {
        router.push(url);
        setIsOpen(false);
    };
    const NavbarLinks = () => (
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
                    onClick={() => handleNavigation(url)}
                >
                    {text}
                </li>
            ))}
        </ul>
    );
    const CartBadge = () => (
        <Badge badgeContent={numberOfCartItems} color="secondary" showZero overlap="circular" data-testid="cart-badge">
            <Icon icon="carbon:shopping-cart" width={35} height={35} data-testid="cart-icon" onClick={() => setCartOpen(true)}/>
        </Badge>
    );

    return (
        <>
            <div className="flex justify-between bg-gray-300 px-[25px] md:px-[35px] py-[10px] w-full">
                {isOpen && <Slider props={props} />}
                <section className="flex gap-[5px] items-center">
                    <Icon icon="noto:shopping-bags" width={30} height={30} />
                    <p>Handmade Bags</p>
                </section>
                <NavbarLinks />
                <section className="flex items-center gap-[10px]">
                    <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                        <Hamburger toggle={setIsOpen} toggled={isOpen} />
                    </div>
                    <CartBadge />
                </section>
            </div>
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
