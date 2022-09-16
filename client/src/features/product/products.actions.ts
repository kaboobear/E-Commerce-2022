import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApiService } from "api/products/products.api.service";
import { ProductFormData } from "features/product/products.types";
import { PriceValues } from "../../features/filters/types/price.iterface";
import { isNullOrUndefined } from "utils/is-null-or-undefined";
import { FiltersAndSort } from "features/filters/types/filters.types";
import { ProductParams } from "api/products/types";

const getParamsFromFilters = (filters: FiltersAndSort): ProductParams => {
  const params: ProductParams = {
    page: filters.page,
    sort: filters.sort,
  };
  if (filters.search) {
    params.search = filters.search;
  }
  if (filters.category) {
    params.category = filters.category.join(",");
  }
  if (!isNullOrUndefined(filters.price)) {
    params.price = PriceValues[filters.price];
  }
  return params;
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (filters: FiltersAndSort) => {
    const response = await productApiService.getProducts(
      getParamsFromFilters(filters)
    );
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: ProductFormData) => {
    const response = await productApiService.createProduct(product);
    return response.data;
  }
);
