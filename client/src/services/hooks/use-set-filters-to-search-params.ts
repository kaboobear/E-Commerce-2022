/* eslint-disable react-hooks/exhaustive-deps */
import { Sort, SortDefaultValue } from 'services/enums/sort.enum';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppSelector } from 'features/hooks';

export const useSetFiltersToSearchParams = (sort: Sort) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, search, category, price } = useAppSelector(
    (state) => state.filters,
  );

  useEffect(() => {
    if (!sort || sort === SortDefaultValue) {
      searchParams.delete('sort');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  }, [sort]);

  useEffect(() => {
    if (page === 1) {
      searchParams.delete('page');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('page', String(page));
    setSearchParams(searchParams);
  }, [page]);

  useEffect(() => {
    if (!category?.length) {
      searchParams.delete('category');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('category', category.join(','));
    setSearchParams(searchParams);
  }, [category]);

  useEffect(() => {
    if (!search) {
      searchParams.delete('search');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('search', search);
    setSearchParams(searchParams);
  }, [search]);

  useEffect(() => {
    if (price === null) {
      searchParams.delete('price');
      setSearchParams(searchParams);
      return;
    }

    searchParams.set('price', price);
    setSearchParams(searchParams);
  }, [price]);
};
