import { Product } from "features/product/products.types";
import { Sort } from "features/filters/types/sort.interface";
import { compareAsc, compareDesc } from "date-fns";

export const sortByType = (type: Sort): ((a: Product, b: Product) => number) =>
  ({
    [Sort.DATE_ASC]: (a: Product, b: Product) =>
      compareAsc(new Date(a.createdAt), new Date(b.createdAt)),
    [Sort.DATE_DESC]: (a: Product, b: Product) =>
      compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
    [Sort.PRICE_ASC]: (a: Product, b: Product) => a.price - b.price,
    [Sort.PRICE_DESC]: (a: Product, b: Product) => b.price - a.price,
  }[type]);
