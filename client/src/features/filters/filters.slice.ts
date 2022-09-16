import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FiltersState } from "./types/filters.types";

const initialState: FiltersState = {
  category: null,
  price: null,
  search: "",
  page: 1,
};

export const filterSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<FiltersState>>) => ({
      ...state,
      ...payload,
    }),
  },
});

export const { set: setFilter } = filterSlice.actions;
export default filterSlice.reducer;
