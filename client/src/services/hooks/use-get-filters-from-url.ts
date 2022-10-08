import { FiltersState } from 'features/filters/filters.types';
import { useSearchParams } from 'react-router-dom';
import { Category } from 'services/enums/category.enums';
import { Price } from 'services/enums/price.enum';

export const useGetFiltersFromUrl = (): FiltersState => {
  const [searchParams] = useSearchParams();
  let filters: FiltersState = {
    category: null,
    price: null,
    search: '',
    page: 1,
  };

  if (searchParams.get('page')) {
    filters.page = Number(searchParams.get('page') || 1);
  }
  if (searchParams.get('search')) {
    filters.search = searchParams.get('search') || '';
  }
  if (searchParams.get('price')) {
    filters.price = searchParams.get('price') as Price;
  }
  if (searchParams.get('category')) {
    filters.category = searchParams.get('category')?.split(',') as Category[];
  }

  return filters;
};
