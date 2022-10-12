import { Category } from 'services/enums/category.enums';
import { Color } from 'services/types/Color';
import { ImageType } from 'services/types/Image';

export interface SingleProduct {
  id: number;
  code: number;
  title: string;
  description: string;
  images: ImageType[];
  price: number;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  colors: Color[];
}
