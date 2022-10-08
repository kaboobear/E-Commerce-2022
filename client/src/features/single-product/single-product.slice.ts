import { createSlice } from '@reduxjs/toolkit';
import { Status } from 'services/types/Status';
import { State } from 'services/types/State';
import { ResponseError } from 'services/types/Errors';
import { SingleProduct } from './single-product.types';
import { fetchSingleProduct } from './single-product.actions';

const initialState: State<SingleProduct | null> = {
  data: null,
  status: Status.INIT,
  error: null,
};

export const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    reset: () => initialState,
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleProduct.pending, (state, action) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.data = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload as ResponseError;
      });
  },
});

export const { reset, resetError } = singleProductSlice.actions;
export default singleProductSlice.reducer;
