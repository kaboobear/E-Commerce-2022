import { createAsyncThunk } from "@reduxjs/toolkit";
import { productApiService } from "api/products/products.api.service";
import { ProductFormData } from "api/products/types/product.interface";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await productApiService.getProducts();
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
