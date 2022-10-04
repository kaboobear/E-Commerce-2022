import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/store';

export const selectFilters = createSelector(
  ({ filters }: RootState) => filters,
  (filters) => filters,
);
