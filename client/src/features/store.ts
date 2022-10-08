import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from './filters/filters.slice';
import productsSlice from './products/products.slice';
import resetPasswordSlice from './reset-password/reset-password.slice';
import singleProductSlice from './single-product/single-product.slice';
import authSlice from './auth/auth.slice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    filters: filtersSlice,
    auth: authSlice,
    resetPassword: resetPasswordSlice,
    singleProduct: singleProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
