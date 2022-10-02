import { Category } from 'services/enums/category.enums';
import { Price } from 'services/enums/price.enum';
import { Sort } from 'services/enums/sort.enum';

export interface FiltersState {
  category: Category[] | null;
  price: Price | null;
  search: string;
  page: number;
}

export interface FiltersAndSort {
  page: number;
  sort: Sort;
  search?: string;
  price?: Price | null;
  category?: Category[] | null;
}
