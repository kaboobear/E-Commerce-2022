import { Category } from "enums/category.enums";
import { Price } from "enums/price.enum";
import { Sort } from "enums/sort.enum";

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
