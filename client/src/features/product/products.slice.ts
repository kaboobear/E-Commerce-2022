import { createSlice } from "@reduxjs/toolkit";
import { Status } from "types/Status";
import { Product } from "api/products/types/product.interface";
import { State } from "types/State";
import { addProduct, fetchProducts } from "./products.actions";

const initialState: State<Product[]> = {
  data: [],
  status: Status.INIT,
  error: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
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
        state.error = action.error.message || null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
      });
  },
});

// export const {} = productsSlice.actions;

export default productsSlice.reducer;
