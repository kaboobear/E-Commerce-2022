import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'services/types/Status';
import { StateWithMode } from 'services/types/State';
import { init, login, logout, register } from './auth.actions';
import { UserData } from './auth.types';
import { ResponseError } from 'services/types/Errors';
import { AuthSubpage } from 'services/enums/auth-subpage.enums';

const initialState: StateWithMode<UserData | null, AuthSubpage> = {
  data: null,
  status: Status.INIT,
  error: null,
  mode: AuthSubpage.None,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
    setMode: (state, { payload }: { payload: AuthSubpage }) => {
      if (!state.data) {
        state.mode = payload;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
        state.mode = AuthSubpage.None;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(register.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
        state.mode = AuthSubpage.None;
      })
      .addCase(register.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(init.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(init.rejected, (state, action) => {
        state.status = Status.ERROR;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = Status.SUCCESS;
        state.data = null;
      })
      .addCase(logout.rejected, (state) => {
        state.status = Status.ERROR;
      });
  },
});

export const { reset, resetError, setMode } = authSlice.actions;
export default authSlice.reducer;
