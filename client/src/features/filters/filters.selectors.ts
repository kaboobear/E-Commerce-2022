import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/store';

export const selectFilters = createSelector(
  ({ filters }: RootState) => filters,
  (filters) => filters,
);

export const selectPage = createSelector(
  ({ filters: { page } }: RootState) => page,
  (page) => page,
);
