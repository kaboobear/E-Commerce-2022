import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Product } from "./entity/Product";
import { SeederOptions } from "typeorm-extension";
import ProductSeeder from "./seeds/product.seeder";
import { ProductFactory } from "./factories/product.factory";
import { User } from "./entity/User";
import { UserFactory } from "./factories/user.factory";
import UserSeeder from "./seeds/user.seeder";

const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.PGHOST,
  port: 5432,
  username: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  synchronize: true,
  logging: false,
  entities: [Product, User],
  migrations: [`${__dirname}/src/database/migration/**/*{.ts,.js}`],
  subscribers: [],
  seeds: [ProductSeeder, UserSeeder],
  factories: [ProductFactory, UserFactory],
};

export const AppDataSource = new DataSource(options);
