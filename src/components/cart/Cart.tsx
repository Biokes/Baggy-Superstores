'use client'
import { useState } from 'react';
import {Box, Dialog} from '@mui/material';
import {Icon} from '@iconify/react';
import { CartItem } from '@/interfaces/interfaces';
import { RootState } from "@/redux/store";
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function Cart() {
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const cart: CartItem[]| undefined = useSelector((state:RootState)=> state.cart.cart);
    const openDialog = !open
    return (
        <div>
            <Dialog
                open={openDialog} onClose={handleClose} aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                        top:'50%',
                        position:'absolute',
                        transform:'translate',
                        backgroundColor: 'background.paper',
                        width:{
                            xs:'full',
                            sm:'500px',
                            md:'80%'
                        },
                        boxShadow:24,
                        p:4,
                        borderRadius:2,
                        display:'flex',
                        flexDirection:'column'
                    }}>
                    <div className={'flex justify-center items-end'}>
                            <Icon icon="fluent-mdl2:cancel" width={30} height={30} style={{color: "red"}}/>
                    </div>
                    <div>
                        {cart.map((cartItem: CartItem, index: number) => (
                            <div key={index}>
                                <Image src={cartItem.bag.image} alt={''} width="100" height="100"/>
                                <p>Quantity : {cartItem.quantity}</p>
                                <p>Price : {cartItem.quantity}</p>
                            </div>
                        ))}
                    </div>
                </Box>
            </Dialog>
        </div>
    );
}
