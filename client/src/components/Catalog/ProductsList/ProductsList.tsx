import { FC } from 'react';
import { Box, Grid, Pagination } from '@mui/material';
import { ProductItemSkeleton } from '../ProductItem/ProductItemSkeleton';
import { ProductItem } from '../ProductItem/ProductItem';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { setFilter } from 'features/filters/filters.slice';
import {
  checkIsBlocked,
  selectProductsAndPagesCount,
} from 'features/products/products.selectors';
import { selectPage } from 'features/filters/filters.selectors';

export const ProductsList: FC = () => {
  const dispatch = useAppDispatch();
  const isBlocked = useAppSelector(checkIsBlocked);
  const { products, pages } = useAppSelector(selectProductsAndPagesCount);
  const page = useAppSelector(selectPage);

  if (isBlocked && !products.length) {
    return (
      <Grid container spacing={3}>
        {Array.from(Array(3)).map((item, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={4}>
            <ProductItemSkeleton />
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Grid container spacing={2.5}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>

      {pages > 1 && (
        <Box display="flex" justifyContent="center" pt={4}>
          <Pagination
            count={pages}
            color="primary"
            page={page}
            onChange={(_, pageValue) =>
              dispatch(setFilter({ page: pageValue }))
            }
          />
        </Box>
      )}
    </>
  );
};
