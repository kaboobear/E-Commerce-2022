import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Fade,
  Typography,
} from '@mui/material';
import { CatalogProduct } from 'features/products/products.types';
import { productCard, productCardContent } from './styles';
import { Link } from 'react-router-dom';
import { Image } from 'components/Common/Image/Image';
import { fallbackImage } from 'services/constants/fallback-image';

interface Props {
  product: CatalogProduct;
}

export const ProductItem: FC<Props> = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      children={
        <Card sx={productCard}>
          <Image
            sx={{ height: ['auto', 340, 320, 275] }}
            src={
              product.images.length ? product.images[0].url : fallbackImage.url
            }
            alt={product.title}
            transition
          />
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
