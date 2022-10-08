import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from '@mui/material';
import { Product as ProductType } from 'features/products/products.types';
import { imageFade, productCard, productCardContent } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductType;
}

export const ProductItem: FC<Props> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      children={
        <Card sx={productCard}>
          <Fade in={true} style={imageFade}>
            <CardMedia
              component="img"
              sx={{ height: [400, 350, 300, 275] }}
              image={product.image}
              alt={product.title}
            />
          </Fade>
          <CardContent sx={productCardContent}>
            <Typography variant="subtitle2" sx={{ mb: 0.5, fontWeight: 700 }}>
              {product.title}
            </Typography>
            <Typography variant="body2" sx={{ mb: 2.5 }} color="text.secondary">
              {product.description}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt="auto"
            >
              <Typography sx={{ mr: 2 }} variant="subtitle1">
                {product.price}$
              </Typography>
              <Button
                size="medium"
                variant="contained"
                sx={{ width: [200, 200, 'auto'] }}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  console.log('Add to Cart');
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </CardContent>
        </Card>
      }
    />
  );
};
