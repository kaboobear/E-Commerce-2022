import { createAsyncThunk } from '@reduxjs/toolkit';
import { productsApiService } from 'api/products/products.api.service';
import { ProductFormData } from 'features/products/products.types';
import { isNullOrUndefined } from 'services/utils/is-null-or-undefined';
import { FiltersAndSort } from 'features/filters/filters.types';
import { ProductParams } from 'api/products/types';

const getParamsFromFilters = (filters: FiltersAndSort): ProductParams => {
  const params: ProductParams = {
    page: filters.page,
    sort: filters.sort,
  };
  if (filters.search) {
    params.search = filters.search;
  }
  if (filters.category) {
    params.category = filters.category.join(',');
  }
  if (!isNullOrUndefined(filters.price)) {
    params.price = filters.price;
  }
  return params;
};

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (filters: FiltersAndSort, { rejectWithValue }) => {
    try {
      const response = await productsApiService.getProducts(
        getParamsFromFilters(filters),
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product: ProductFormData, { rejectWithValue }) => {
    try {
      const response = await productsApiService.createProduct(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
