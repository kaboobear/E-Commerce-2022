import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "features/store";

export const selectResetPasswordError = createSelector(
  ({ resetPassword: { error } }: RootState) => error,
  (error) => error
);

export const selectResetPasswordStatus = createSelector(
  ({ resetPassword: { status } }: RootState) => status,
  (status) => status
);
