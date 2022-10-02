import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchProducts } from 'features/product/products.actions';
import { Status } from 'services/types/Status';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { Sort } from 'services/enums/sort.enum';
import { Filters } from 'components/Catalog/Filters/Filters';
import { SortSelector } from 'components/Catalog/Sort/Sort';
import { ProductsList } from 'components/Catalog/ProductsList/ProductsList';
import { selectStatus } from 'features/product/products.selectors';

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const [sort, setSort] = useState<Sort>(Sort.DATE_DESC);
  const status = useAppSelector(selectStatus);

  useEffect(() => {
    if (status === Status.INIT) {
      dispatch(fetchProducts({ page: 1, sort }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, status]);

  const initLoading = status === Status.LOADING || status === Status.INIT;

  return (
    <Box display="flex">
      <Filters sort={sort} initLoading={initLoading} />
      <Box flex={1}>
        <SortSelector sort={sort} setSort={setSort} />
        <ProductsList initLoading={initLoading} sort={sort} />
      </Box>
    </Box>
  );
};
