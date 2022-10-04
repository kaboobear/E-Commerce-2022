import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'features/store';
import { AuthSubpage } from 'services/enums/auth-subpage.enums';
import { Status } from 'services/types/Status';

export const selectUser = createSelector(
  ({ auth: { data } }: RootState) => data,
  (data) => data,
);

export const selectAuthError = createSelector(
  ({ auth: { error } }: RootState) => error,
  (error) => error,
);

export const checkIsInit = createSelector(
  ({ auth: { status } }: RootState) => status,
  (status) => [Status.INIT].includes(status),
);

export const selectMode = ({ auth: { mode } }: RootState) => mode;

export const selectIsNoneMode = createSelector(
  selectMode,
  (mode) => mode === AuthSubpage.None,
);
