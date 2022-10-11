import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { Product } from './entity/Product';
import { SeederOptions } from 'typeorm-extension';
import ProductSeeder from './seeds/product.seeder';
import { ProductFactory } from './factories/product.factory';
import { User } from './entity/User';
import { UserFactory } from './factories/user.factory';
import UserSeeder from './seeds/user.seeder';
import { Color } from './entity/Color';
import { ColorFactory } from './factories/color.factory';
import { ImageFactory } from './factories/image.factory';
import { Image } from './entity/Image';

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: false,
  entities: [Product, User, Color, Image],
  migrations: [`${__dirname}/src/database/migration/**/*{.ts,.js}`],
  subscribers: [],
  seeds: [ProductSeeder, UserSeeder],
  factories: [ColorFactory, ImageFactory, ProductFactory, UserFactory],
};

export const AppDataSource = new DataSource(options);
