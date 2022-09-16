import { FC, useEffect } from "react";
import { Box, Grid, Pagination } from "@mui/material";
import { ProductSkeleton } from "./ProductSkeleton";
import { Product } from "./Product";
import { useAppDispatch, useAppSelector } from "features/hooks";
import { fetchProducts } from "features/product/products.actions";
import { Sort } from "features/filters/types/sort.interface";
import { setFilter } from "features/filters/filters.slice";
import { selectProductsAndPagesCount } from "features/product/products.selectors";

interface Props {
  initLoading: boolean;
  sort: Sort;
}

export const ProductsList: FC<Props> = ({ initLoading, sort }) => {
  const dispatch = useAppDispatch();
  const { products, pages } = useAppSelector(selectProductsAndPagesCount);
  const filters = useAppSelector((state) => state.filters);

  useEffect(() => {
    if (products.length) {
      dispatch(fetchProducts({ ...filters, sort }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters.page, dispatch]);

  if (initLoading && !products.length) {
    return (
      <Grid container spacing={2}>
        {Array.from(Array(3)).map((item, index) => (
          <Grid key={index} item xs={12} sm={12} md={6} lg={4}>
            <ProductSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={12} md={6} lg={4}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>

      {pages > 1 && (
        <Box display="flex" justifyContent="center" pt={2}>
          <Pagination
            count={pages}
            color="primary"
            page={filters.page}
            //todo
            onChange={(_, pageValue) =>
              dispatch(setFilter({ page: pageValue }))
            }
          />
        </Box>
      )}
    </>
  );
};
