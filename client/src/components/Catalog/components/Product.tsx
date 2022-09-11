import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product as ProductType } from "api/products/types/product.interface";

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="350"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {product.price}$
        </Typography>
        <Button size="large" variant="contained" fullWidth>
          Buy
        </Button>
      </CardContent>
    </Card>
  );
};
