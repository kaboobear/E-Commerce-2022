import { Category } from 'services/enums/category.enums';

export interface SingleProduct {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}
