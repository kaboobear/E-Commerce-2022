import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Product } from '../entity/Product';
import { Category } from 'enums/category.enum';

export default class ProductSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const productFactory = await factoryManager.get(Product);
    //Phones
    await productFactory.save({
      title: 'Iphone 5',
      price: 300,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 6',
      price: 400,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 7',
      price: 500,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 8',
      price: 600,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 9',
      price: 700,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 10',
      price: 800,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 11',
      price: 900,
      category: Category.PHONE,
    });
    await productFactory.save({
      title: 'Iphone 12',
      price: 1000,
      category: Category.PHONE,
    });
    //Tablets
    await productFactory.save({
      title: 'Ipad 2',
      price: 600,
      category: Category.TABLET,
    });
    await productFactory.save({
      title: 'Ipad 3',
      price: 600,
      category: Category.TABLET,
    });
    await productFactory.save({
      title: 'Ipad 4',
      price: 750,
      category: Category.TABLET,
    });
    await productFactory.save({
      title: 'Ipad 5',
      price: 900,
      category: Category.TABLET,
    });
    await productFactory.save({
      title: 'Ipad 6',
      price: 1050,
      category: Category.TABLET,
    });
    //Headphones
    await productFactory.save({
      title: 'Airpods',
      price: 200,
      category: Category.HEADPHONES,
    });
    await productFactory.save({
      title: 'Airpods 2',
      price: 300,
      category: Category.HEADPHONES,
    });
    await productFactory.save({
      title: 'Airpods Pro',
      price: 350,
      category: Category.HEADPHONES,
    });
    await productFactory.save({
      title: 'Airpods Pro Max',
      price: 700,
      category: Category.HEADPHONES,
    });
    await productFactory.save({
      title: 'MacBook Air',
      price: 1500,
      category: Category.LAPTOP,
    });
    await productFactory.save({
      title: 'MacBook Air M2',
      price: 2000,
      category: Category.LAPTOP,
    });
    await productFactory.save({
      title: 'MacBook Pro',
      price: 3000,
      category: Category.LAPTOP,
    });
    await productFactory.save({
      title: 'MacBook Pro M2',
      price: 4000,
      category: Category.LAPTOP,
    });
  }
}
