import { FC } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import { ProductSkeleton } from '../Product/ProductSkeleton';
import { Product } from '../Product/Product';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { setFilter } from 'features/filters/filters.slice';
import {
  checkIsBlocked,
  selectProductsAndPagesCount,
} from 'features/product/products.selectors';

export const ProductsList: FC = () => {
  const dispatch = useAppDispatch();
  const isBlocked = useAppSelector(checkIsBlocked);
  const { products, pages } = useAppSelector(selectProductsAndPagesCount);
  const filters = useAppSelector((state) => state.filters);

  if (isBlocked && !products.length) {
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
            onChange={(_, pageValue) =>
              dispatch(setFilter({ page: pageValue }))
            }
          />
        </Box>
      )}
    </>
  );
};
