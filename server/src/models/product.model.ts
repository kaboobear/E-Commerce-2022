import { sequelize } from "../database/db";
import { DataType } from "sequelize-typescript";
import { Category } from "../types/category.types";

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
      type: DataType.ENUM,
      values: Object.keys(Category),
    },
  },
  { freezeTableName: true }
);
