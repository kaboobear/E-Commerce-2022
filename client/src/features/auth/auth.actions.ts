import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginBody, RegisterBody } from "api/auth/types";
import { authApiService } from "api/auth/auth.api.service";

export const login = createAsyncThunk(
  "auth/login",
  async (body: LoginBody, { rejectWithValue }) => {
    try {
      const response = await authApiService.login(body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (body: RegisterBody, { rejectWithValue }) => {
    try {
      const response = await authApiService.register(body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  authApiService.logout();
});

export const init = createAsyncThunk(
  "auth/init",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authApiService.init();
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
