import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/store';
import { Status } from 'services/types/Status';

export const selectStatus = createSelector(
  ({ products: { status } }: RootState) => status,
  (status) => status,
);

export const selectProductsAndPagesCount = createSelector(
  ({ products: { data } }: RootState) => data,
  (data) => data,
);

export const checkIsBlocked = createSelector(
  ({ products: { status } }: RootState) => status,
  (status) => [Status.INIT, Status.LOADING].includes(status),
);

export const checkIsInit = createSelector(
  ({ products: { status } }: RootState) => status,
  (status) => [Status.INIT].includes(status),
);
