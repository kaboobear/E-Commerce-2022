import { createAsyncThunk } from '@reduxjs/toolkit';
import { singleProductApiService } from 'api/singleProduct/single-product.api.service';

export const fetchSingleProduct = createAsyncThunk(
  'singleProduct/fetchSingleProduct',
  async ({ id }: { id: number }, { rejectWithValue }) => {
    try {
      const response = await singleProductApiService.getSingleProduct({ id });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
