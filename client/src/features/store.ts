import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/filters.slice";
import productsSlice from "./product/products.slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
