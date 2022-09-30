import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "features/store";

export const selectUser = createSelector(
  ({ auth: { data } }: RootState) => data,
  (data) => data
);

export const selectAuthError = createSelector(
  ({ auth: { error } }: RootState) => error,
  (error) => error
);
