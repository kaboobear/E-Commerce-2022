/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { fetchProducts } from 'features/products/products.actions';
import { useAppDispatch, useAppSelector } from 'features/hooks';
import { Sort, SortDefaultValue } from 'services/enums/sort.enum';
import { SortSelector } from 'components/Catalog/Sort/Sort';
import { ProductsList } from 'components/Catalog/ProductsList/ProductsList';
import { useSetFiltersToSearchParams } from 'services/hooks/use-set-filters-to-search-params';
import { setFilter } from 'features/filters/filters.slice';
import { useHasValueChanged } from 'services/hooks/use-has-value-changed';
import { selectFilters } from 'features/filters/filters.selectors';
import { useSearchParams } from 'react-router-dom';
import { checkIsInit } from 'features/products/products.selectors';
import { useGetFiltersFromUrl } from 'services/hooks/use-get-filters-from-url';
import { ShowUpLg } from 'services/utils/show-and-hide/show-up-lg';
import { FiltersSortSection } from 'components/Catalog/Filters/FiltersSortSection';
import { catalogPageWrapper, sortWrapper } from './styles';

export const CatalogPage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState<Sort>(
    (searchParams.get('sort') as Sort) || SortDefaultValue,
  );
  const { search, category, price, page } = useAppSelector(selectFilters);
  const isInit = useAppSelector(checkIsInit);
  const hasPageChanged = useHasValueChanged(page);
  const filtersFromUrl = useGetFiltersFromUrl();
  useSetFiltersToSearchParams(sort);

  useEffect(() => {
    dispatch(setFilter(filtersFromUrl));
    dispatch(fetchProducts({ ...filtersFromUrl, sort }));
  }, []);

  useEffect(() => {
    if (isInit) return;
    const shouldGoToTheFirstPage = !hasPageChanged && page !== 1;

    if (shouldGoToTheFirstPage) {
      dispatch(setFilter({ page: 1 }));
      return;
    }

    dispatch(
      fetchProducts({
        page: shouldGoToTheFirstPage ? 1 : page,
        sort,
        search,
        category,
        price,
      }),
    );
  }, [dispatch, search, category, price, sort, page]);

  return (
    <Box sx={catalogPageWrapper}>
      <FiltersSortSection sort={sort} setSort={setSort} />
      <Box flex={1}>
        <ShowUpLg>
          <Box sx={sortWrapper}>
            <SortSelector sort={sort} setSort={setSort} />
          </Box>
        </ShowUpLg>

        <ProductsList />
      </Box>
    </Box>
  );
};
