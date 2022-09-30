import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filters/filters.slice";
import productsSlice from "./product/products.slice";
import resetPasswordSlice from "./reset-password/reset-password.slice";
import authSlice from "./auth/auth.slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
    auth: authSlice,
    resetPassword: resetPasswordSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
