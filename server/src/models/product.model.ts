import { sequelize } from "../database/db";
import { DataType } from "sequelize-typescript";

export enum Category {
  PHONE,
  LAPTOP,
  TABLET,
  HEADPHONES,
  WATCH,
}

export const CategoryName = {
  [Category.PHONE]: "Phone",
  [Category.LAPTOP]: "Laptop",
  [Category.TABLET]: "Tablet",
  [Category.HEADPHONES]: "Headphones",
  [Category.WATCH]: "Watch",
};

export const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataType.STRING,
    },
    title: {
      type: DataType.STRING,
    },
    description: {
      type: DataType.STRING,
    },
    price: {
      type: DataType.INTEGER,
    },
    category: {
      type: DataType.INTEGER,
    },
  },
  { freezeTableName: true }
);
