import { Category } from "../filters/types/category.interface";

export interface ProductFormData {
  title: string;
  description: string;
  image: string;
  price: number;
  category: Category;
}

export interface Product extends ProductFormData {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductsWithPagesCount {
  products: Product[];
  pages: number;
}
