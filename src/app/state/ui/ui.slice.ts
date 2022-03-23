import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { UiState } from "./ui.type";

const initialState: UiState = {
  isPageLoading: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    togglePageLoading: (state, action: PayloadAction<boolean>) => {
      state.isPageLoading = action.payload;
    },
  },
});

export const { togglePageLoading } = uiSlice.actions;
export default uiSlice.reducer;
