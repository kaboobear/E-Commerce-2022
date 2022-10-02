import { FC, useState } from 'react';
import { Button } from '@mui/material';
import { ProductForm } from './ProductForm';
import { Dialog } from 'components/Common/Dialog/Dialog';

export const CreateProduct: FC = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleOpen}>
        Create New Product
      </Button>
      <Dialog open={open} handleClose={handleClose}>
        <ProductForm />
      </Dialog>
    </>
  );
};
