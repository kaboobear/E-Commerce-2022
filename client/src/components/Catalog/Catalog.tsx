import { FC, useEffect } from "react";
import { Grid } from "@mui/material";
import { Product } from "./components/Product";
import { fetchProducts } from "features/product/products.actions";
import { Status } from "types/Status";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { ProductSkeleton } from "./components/ProductSkeleton";

export const Catalog: FC = () => {
  const dispatch = useAppDispatch();
  const { data: products, status } = useAppSelector((state) => state.products);

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const isLoading = status === Status.LOADING || status === Status.INIT;
  if (isLoading) {
    return (
      <Grid container spacing={2}>
        {Array.from(Array(3)).map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ProductSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};
