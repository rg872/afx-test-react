import {
  createAction,
  createEntityAdapter,
  PayloadAction,
} from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { Place } from "./place.type";

const getPlacePredictions = createAction<string | undefined>(
  "place/getPlacePredictions"
);

export const placeAdapter = createEntityAdapter<Place>({
  selectId: (place) => place.place_id,
  sortComparer: (a, b) => a.description.localeCompare(b.description),
});

export const placeSlice = createSlice({
  name: "place",
  initialState: placeAdapter.getInitialState({
    selectedPlaceId: "",
  }),
  reducers: {
    addPlaces(state, action: PayloadAction<Place[]>) {
      placeAdapter.addMany(state, action.payload);
    },
    setSelectedPlaceId: (state, action: PayloadAction<string>) => {
      state.selectedPlaceId = action.payload;
    },
  },
});

export const { addPlaces, setSelectedPlaceId } = placeSlice.actions;
export { getPlacePredictions };
export default placeSlice.reducer;
