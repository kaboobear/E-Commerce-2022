import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "features/store";

export const selectStatus = createSelector(
  (state: RootState) => state.products,
  (products) => products.status
);

export const selectProductsAndPagesCount = createSelector(
  (state: RootState) => state.products,
  (products) => products.data
);
