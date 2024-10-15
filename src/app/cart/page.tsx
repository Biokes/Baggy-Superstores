'use client'
import { useState } from 'react';
import { Modal,Box, Button } from '@mui/material';
import {Icon} from '@iconify/react';
// import {useRef} from 'react';
import { CartItem } from '@/interfaces/interfaces';
import { RootState } from "@/redux/store";
import { useSelector } from 'react-redux';
import Image from 'next/image';

export default function Cart() {
  const [open, setOpen] = useState(false);
  // const dialogRef = useRef<HTMLDialogElement| null>(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const cart: CartItem[]| undefined = useSelector((state:RootState)=> state.cart.cart);
  cart.map((cartItem:CartItem,index:number)=>(
      <div key={index}>
          <Image src={cartItem.bag.image} alt={''} width="100" height="100"/>
          <p>Qualtity : {cartItem.quantity}</p>
          <p>Price : {cartItem.quantity
              // * cartItem.bag.price
          }</p>
          <p>{}</p>
      </div>
  ))
  return (  
    <div>
      <Modal 
      // ref={dialogRef}
        open={open} onClose={handleClose} aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
        sx={{top:'50%',position:'absolute',transform:'translate',backgroundColor: 'background.paper',
        width:{xs:'full',sm:'500px',md:'80%'}, boxShadow:24,p:4,borderRadius:2, display:'flex',flexDirection:'column'}}>
          <div className={'flex justify-center items-end'}>
            <Button variant="contained" color="primary" sx={{justifyContent:'center',
                alignItems:'flex-end'}} onClick={handleOpen}>
                <Icon icon="fluent-mdl2:cancel" width="1.2rem" height="1.2rem" style={{color: "white"}}/>
            </Button>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
