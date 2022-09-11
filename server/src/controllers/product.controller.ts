import { Request, Response } from "express";
import { Category, Product } from "../models/product.model";

export const create = async (req: Request, res: Response) => {
  try {
    const newProduct = await Product.create(req.body);

    res.json(newProduct);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAll = async (req: Request, res: Response) => {
  try {
    const products = await Product.findAll();

    res.send(products);
  } catch (error) {
    return res.status(500).json(error);
  }
};
