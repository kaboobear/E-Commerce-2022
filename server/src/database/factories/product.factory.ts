import { setSeederFactory } from "typeorm-extension";
import { Category } from "../../enums/category.enum";
import { getRandomEnumValue } from "../../utils/get-random-enum-value";
import { Product } from "../entity/Product";

export const ProductFactory = setSeederFactory(Product, (faker) => {
  const product = new Product();
  product.title = faker.commerce.productName();
  product.description = faker.commerce.productDescription();
  product.image =
    "http://cdn.shopify.com/s/files/1/0593/0480/4531/products/IPHONE121_COLOR-PURPLE_CAPACITY-ALL.png";
  product.price = Number(faker.commerce.price(0, 3000));
  product.category = getRandomEnumValue(Category);

  return product;
});
