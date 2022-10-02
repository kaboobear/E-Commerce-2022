import { IsNumber, IsString } from 'class-validator';
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

export class GetProductsResponseDto {
  products: Product[];
  pages: number;
}

export class CreateProductBodyDto {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsString()
  image: string;

  @IsNumber()
  price: number;

  category: Category;
}
