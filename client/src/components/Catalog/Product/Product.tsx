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
import { Product as ProductType } from 'features/product/products.types';
import { productCard, productCardContent } from './styles';
import { Link } from 'react-router-dom';

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <Link
      to="/profile"
      children={
        <Card sx={productCard}>
          <Fade
            in={true}
            style={{ transitionDelay: '300ms', transitionDuration: '500ms' }}
          >
            <CardMedia
              component="img"
              height="300"
              image={product.image}
              alt={product.title}
            />
          </Fade>
          <CardContent sx={productCardContent}>
            <Typography sx={{ fontSize: 20, fontWeight: 700, mb: 0.5 }}>
              {product.title}
            </Typography>
            <Typography
              sx={{
                mb: 2.5,
                ontSize: 14,
                fontWeight: 400,
                opacity: 0.6,
                lineHeight: 1.2,
              }}
            >
              {product.description}
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              mt="auto"
            >
              <Typography
                component="div"
                sx={{ fontSize: 24, fontWeight: 700 }}
              >
                {product.price}$
              </Typography>
              <Button
                size="medium"
                variant="contained"
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
