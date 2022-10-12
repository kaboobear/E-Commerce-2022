import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Product } from '../entity/Product';
import { Category } from 'enums/category.enum';
import { Color } from 'database/entity/Color';
import { Image } from 'database/entity/Image';

const products = [
  { title: 'Iphone 5', price: 300, category: Category.PHONE },
  { title: 'Iphone 6', price: 400, category: Category.PHONE },
  { title: 'Iphone 7', price: 500, category: Category.PHONE },
  { title: 'Iphone 8', price: 600, category: Category.PHONE },
  { title: 'Iphone 10', price: 800, category: Category.PHONE },
  { title: 'Iphone 7', price: 500, category: Category.PHONE },
  { title: 'Iphone 11', price: 900, category: Category.PHONE },
  { title: 'Iphone 12', price: 1000, category: Category.PHONE },
  { title: 'Ipad 2', price: 600, category: Category.TABLET },
  { title: 'Ipad 3', price: 600, category: Category.TABLET },
  { title: 'Ipad 4', price: 750, category: Category.TABLET },
  { title: 'Ipad 5', price: 900, category: Category.TABLET },
  { title: 'Ipad 6', price: 1050, category: Category.TABLET },
  { title: 'Airpods', price: 200, category: Category.HEADPHONES },
  { title: 'Airpods 2', price: 300, category: Category.HEADPHONES },
  { title: 'Airpods Pro', price: 350, category: Category.HEADPHONES },
  { title: 'Airpods Pro Max', price: 700, category: Category.HEADPHONES },
  { title: 'MacBook Air', price: 1500, category: Category.LAPTOP },
  { title: 'MacBook Air M2', price: 2000, category: Category.LAPTOP },
  { title: 'MacBook Pro', price: 3000, category: Category.LAPTOP },
  { title: 'MacBook Pro M2', price: 4000, category: Category.LAPTOP },
];

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const productFactory = await factoryManager.get(Product);
    const colorFactory = await factoryManager.get(Color);
    const imageFactory = await factoryManager.get(Image);

    //Colors
    const blackColor = await colorFactory.save({
      title: 'black',
      code: '#000',
    });
    const greyColor = await colorFactory.save({
      title: 'grey',
      code: '#888',
    });
    const redColor = await colorFactory.save({
      title: 'red',
      code: '#f00',
    });

    await Promise.all(
      products.map(async (product) => {
        const image1 = await imageFactory.save({ order: 1 });
        const image2 = await imageFactory.save({
          order: 2,
          url: 'https://wwwwwwwwwwww.printer4you.com/media/images/org/apple-airpods-pro-true-wireless-kopfhoerer-mit-mikrofon_213AP-MLWK3ZM-A_1.jpg',
        });
        const image3 = await imageFactory.save({
          order: 3,
          url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/FQKW2?wid=1673&hei=1353&fmt=jpeg&qlt=95&.v=1517334319257',
        });
        const image4 = await imageFactory.save({
          order: 4,
          url: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-mini-select-wifi-purple-202109_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&.v=1629840706000',
        });
        const image5 = await imageFactory.save({
          order: 5,
          url: 'https://cdn.shopify.com/s/files/1/1706/9177/products/macbook-pro-14-space-gray-Custom-Mac-BD_cb6c821c-c249-4d9c-8278-1a307cbbdab7.jpg?v=1659592838',
        });

        const savedProduct = await productFactory.save({
          ...product,
          colors: [blackColor, greyColor, redColor],
          images: [image1, image2, image3, image4, image5],
        });

        savedProduct.setProductCode();
        return productFactory.save(savedProduct);
      }),
    );
  }
}
