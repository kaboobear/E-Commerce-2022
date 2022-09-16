import { plainToInstance } from "class-transformer";
import { Request, Response } from "express";
import { FindOptions, Op, WhereOptions } from "sequelize";
import { Sort, SortValues } from "../types/sort.types";
import { Product } from "../models/product.model";

export class GetProductsQueryDto {
  page!: number;
  sort!: Sort;
  category?: string;
  price?: string;
  search?: string;
}
const LIMIT = 3;

export const getAll = async (req: Request, res: Response) => {
  try {
    const query = plainToInstance(GetProductsQueryDto, req.query);

    const page = Number(query.page) || 1;
    const offset = (page - 1) * LIMIT;

    const options: FindOptions = { limit: LIMIT, offset };

    let where: WhereOptions = {};
    if (query.category) {
      where.category = {
        [Op.in]: query.category.split(","),
      };
    }
    if (query.search) {
      where.title = {
        [Op.like]: `%${query.search}%`,
      };
    }
    if (query.price) {
      const priceRange = query.price.split("-");
      if (priceRange.length === 1) {
        where.price = {
          [Op.gte]: priceRange[0],
        };
      }
      if (priceRange.length === 2) {
        where.price = {
          [Op.and]: {
            [Op.gte]: priceRange[0],
            [Op.lte]: priceRange[1],
          },
        };
      }
    }
    if (query.sort) {
      const sortOptions = SortValues[query.sort];
      options.order = [[sortOptions.column, sortOptions.order]];
    }
    options.where = where;
    const products = await Product.findAll(options);

    const productsCount = await Product.count({ where });
    const pagesCount = Math.ceil(productsCount / LIMIT);

    res.send({
      products,
      pages: pagesCount,
    });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};
