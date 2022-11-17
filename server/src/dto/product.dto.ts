import { IsNumber, IsString } from 'class-validator';
import { Image } from 'database/entity/Image';
import { Product } from 'database/entity/Product';
import { Category } from 'enums/category.enum';
import { Sort } from 'enums/sort.enum';

export class GetProductsQueryDto {
  page: number;
  sort: Sort;
  category?: string;
  price?: string;
  search?: string;
}

export class ProductForCatalogDto {
  id: number;
  title: string;
  description: string;
  images: Image[];
  price: number;
  created_at: Date;
}

export class GetProductsResponseDto {
  products: ProductForCatalogDto[];
  pages: number;
}

export class CreateProductBodyDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  category: Category;
}

