import { PayloadAction } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

import type { CatInitialState, Fact } from "./cats.type";

const initialState: CatInitialState = {
  fact: null,
};

const getCatFact = createAction("cat/getCatFact");

const catSlice = createSlice({
  name: "cat",
  initialState,
  reducers: {
    newFact: (state, action: PayloadAction<Fact>) => {
      state.fact = action.payload;
    },
  },
});

const { newFact } = catSlice.actions;

export { getCatFact, newFact };

export default catSlice.reducer;
