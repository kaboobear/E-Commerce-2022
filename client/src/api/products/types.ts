import { Category } from "features/filters/types/category.interface";

export interface ProductParams {
  page: number;
  sort: string;
  category?: string;
  search?: string;
  price?: string;
}
