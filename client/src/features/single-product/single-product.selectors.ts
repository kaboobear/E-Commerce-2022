import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/store';
import { Status } from 'services/types/Status';

export const selectStatus = createSelector(
  ({ singleProduct: { status } }: RootState) => status,
  (status) => status,
);

export const selectSingleProduct = createSelector(
  ({ singleProduct: { data } }: RootState) => data,
  (data) => data,
);

export const checkIsBlocked = createSelector(
  ({ singleProduct: { status } }: RootState) => status,
  (status) => [Status.INIT, Status.LOADING].includes(status),
);

export const checkIsInit = createSelector(
  ({ singleProduct: { status } }: RootState) => status,
  (status) => [Status.INIT].includes(status),
);

export const checkIsError = createSelector(
  ({ singleProduct: { status } }: RootState) => status,
  (status) => [Status.ERROR].includes(status),
);
