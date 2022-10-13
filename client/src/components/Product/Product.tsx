import { Box, Button, Grid, Typography } from '@mui/material';
import { useAppSelector } from 'features/hooks';
import { selectSingleProduct } from 'features/single-product/single-product.selectors';
import React, { FC, useState } from 'react';
import { fallbackImage } from 'services/constants/fallback-image';
import { Color } from 'services/types/Color';
import { isNotEmpty } from 'services/utils/array/is-empty';
import { Colors } from './components/Colors/Colors';
import { Counter } from './components/Counter/Counter';
import { Gallery } from './components/Gallery/Gallery';

export const Product: FC = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const product = useAppSelector(selectSingleProduct);

  if (!product) {
    return null;
  }

  return (
    <Box display="flex" flexDirection={['column', 'column', 'row']}>
      <Gallery
        images={product.images.length ? product.images : [fallbackImage]}
      />

      <Box flex={1}>
        <Typography sx={{ mb: 1 }} variant="subtitle1">
          {product.title}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body2" color="text.disabled">
          Product code: {product.code}
        </Typography>
        <Typography sx={{ mb: 2 }} variant="body1">
          {product.description}
        </Typography>

        {isNotEmpty(product.colors) && (
          <Box mb={2}>
            <Colors
              colors={product.colors}
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
          </Box>
        )}

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Counter quantity={quantity} setQuantity={setQuantity} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              sx={{ borderRadius: 40, width: '100%', height: 58 }}
            >
              Add To Cart
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
