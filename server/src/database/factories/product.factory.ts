import { setSeederFactory } from 'typeorm-extension';
import { Category } from 'enums/category.enum';
import { getRandomEnumValue } from 'utils/get-random-enum-value';
import { Product } from '../entity/Product';
import { Color } from 'database/entity/Color';
import { AppDataSource } from 'database/data-source';

export const ProductFactory = setSeederFactory(Product, (faker) => {
  const product = new Product();
  product.title = faker.commerce.productName();
  product.description = faker.commerce.productDescription();
  product.price = Number(faker.commerce.price(0, 3000));
  product.category = getRandomEnumValue(Category);

  return product;
});
