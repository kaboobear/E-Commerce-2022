import { Category } from "./category.interface";

export interface ProductFormData {
  title: string;
  description: string;
  image: string;
  price: number;
  category: Category;
}

export interface Product extends ProductFormData {
  id: number;
}
