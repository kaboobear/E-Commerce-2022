import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'services/types/Status';
import { ProductsWithPagesCount } from 'features/products/products.types';
import { State } from 'services/types/State';
import { addProduct, fetchProducts } from './products.actions';
import { ResponseError } from 'services/types/Errors';

const initialState: State<ProductsWithPagesCount> = {
  data: {
    products: [],
    pages: 0,
  },
  status: Status.INIT,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    reset: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data.products = [...state.data.products, action.payload];
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      });
  },
});

export const { reset, resetError } = productsSlice.actions;
export default productsSlice.reducer;
