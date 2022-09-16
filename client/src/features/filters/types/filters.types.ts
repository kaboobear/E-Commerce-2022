import { Category } from "features/filters/types/category.interface";
import { Price } from "features/filters/types/price.iterface";
import { Sort } from "features/filters/types/sort.interface";

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
