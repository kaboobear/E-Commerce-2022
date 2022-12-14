import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'services/types/Status';
import { State } from 'services/types/State';
import { resetPassword, resetPasswordRequest } from './reset-password.actions';
import { ResponseError } from 'services/types/Errors';

const initialState: State<null> = {
  data: null,
  status: Status.INIT,
  error: null,
};

export const resetPasswordSlice = createSlice({
  name: 'resetPassword',
  initialState,
  reducers: {
    reset: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(resetPasswordRequest.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(resetPasswordRequest.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
      });
  },
});

export const { reset, resetError } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
