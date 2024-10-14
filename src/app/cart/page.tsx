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
      <Button variant="contained" color="primary" onClick={handleOpen}>
      <Icon icon="fluent-mdl2:cancel" width="1.2rem" height="1.2rem"  style={{color: "white"}}/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            MUI Modal Example
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>
            This is a basic example of a modal using Material-UI.
          </Typography>
          <Button onClick={handleClose} sx={{ mt: 3 }}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
}
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
