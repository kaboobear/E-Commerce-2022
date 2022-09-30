import { FC } from "react";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Fade,
  Typography,
} from "@mui/material";
import { Product as ProductType } from "features/product/products.types";

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <Card sx={{ height: 1, display: "flex", flexDirection: "column" }}>
      <Fade
        in={true}
        style={{ transitionDelay: "300ms", transitionDuration: "500ms" }}
      >
        <CardMedia
          component="img"
          height="350"
          image={product.image}
          alt={product.title}
        />
      </Fade>
      <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
          <Typography></Typography>
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          sx={{ mt: "auto" }}
        >
          {product.price}$
        </Typography>
        <Button size="large" variant="contained" fullWidth>
          Add To Cart
        </Button>
      </CardContent>
    </Card>
  );
};
