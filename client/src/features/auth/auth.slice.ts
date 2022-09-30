import { createSlice } from "@reduxjs/toolkit";
import { Status } from "types/Status";
import { State } from "types/State";
import { init, login, logout, register } from "./auth.actions";
import { UserData } from "./auth.types";
import { ResponseError } from "types/Errors";

const initialState: State<UserData | null> = {
  data: null,
  status: Status.INIT,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    resetError: (state) => {
      state.error = null;
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
      })
      .addCase(register.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      })
      .addCase(init.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = Status.SUCCESS;
        state.data = null;
      });
  },
});

export const { reset, resetError } = authSlice.actions;
export default authSlice.reducer;
