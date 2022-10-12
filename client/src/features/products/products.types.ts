import { Category } from 'services/enums/category.enums';
import { ImageType } from 'services/types/Image';

export interface ProductFormData {
  title: string;
  description: string;
  price: number;
  category: Category;
}

export interface CatalogProduct {
  id: number;
  title: string;
  description: string;
  images: ImageType[];
  price: number;
  created_at: Date;
}

export interface ProductsWithPagesCount {
  products: CatalogProduct[];
  pages: number;
}
