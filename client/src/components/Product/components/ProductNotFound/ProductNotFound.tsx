import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { productNotFound } from './styles';

export default function ProductNotFound() {
  return (
    <Box sx={productNotFound}>
      <Typography variant="h4" sx={{ lineHieght: '1', mb: 2 }}>
        Product not found
      </Typography>
      <Typography variant="body1" sx={{ mb: 2, mt: -1 }}>
        Sorry, we can't found this product, try to find another one
      </Typography>
      <Link children={<Button variant="contained">Back Home</Button>} to="/" />
    </Box>
  );
}
