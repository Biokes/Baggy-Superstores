'use client'
import { useState } from 'react';
import { Modal, Box, Button, Typography } from '@mui/material';
import {Icon} from '@iconify/react';

export default function Cart() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (  
    <div>
      <Button variant="contained" color="primary" sx={{justifyContent:'center',alignItems:'flex-end'}} onClick={handleOpen}>
        <Icon icon="fluent-mdl2:cancel" width="1.2rem" height="1.2rem"  style={{color: "white"}}/>
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box>
          <p>Your cart is under development.</p>  
          <Typography>this is the box tag</Typography>
        </Box>
      </Modal>
    </div>
  );
}
