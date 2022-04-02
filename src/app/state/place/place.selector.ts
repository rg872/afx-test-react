import { createSelector } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import { placeAdapter } from "./place.slice";

const { selectAll, selectById, selectEntities, selectIds, selectTotal } =
  placeAdapter.getSelectors((state: RootState) => state.place);

export const selectAllPlace = selectAll;
export const selectSelectedPlaceId = (state: RootState) =>
  state.place.selectedPlaceId;
export const selectSelectedPlace = (state: RootState) =>
  selectById(state, state.place.selectedPlaceId);
