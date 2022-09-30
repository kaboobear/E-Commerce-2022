import { createAsyncThunk } from "@reduxjs/toolkit";
import { ResetPasswordBody, ResetPasswordRequestBody } from "api/auth/types";
import { authApiService } from "api/auth/auth.api.service";

export const resetPasswordRequest = createAsyncThunk(
  "reset-password/request",
  async (body: ResetPasswordRequestBody, { rejectWithValue }) => {
    try {
      await authApiService.resetPasswordRequest(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const resetPassword = createAsyncThunk(
  "reset-password/reset",
  async (body: ResetPasswordBody, { rejectWithValue }) => {
    try {
      return await authApiService.resetPassword(body);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
