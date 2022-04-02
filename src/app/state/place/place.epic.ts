import { filter, map, switchMap } from "rxjs";
import { AppEpic } from "../store";
import { addPlaces, getPlacePredictions } from "./place.slice";
import { PredictionRequest } from "./place.type";

export const getPlacePredictionsEpic: AppEpic = (action$) =>
  action$.pipe(
    filter(getPlacePredictions.match),
    switchMap(async ({ payload: keyword }) => {
      if (keyword) {
        const request: PredictionRequest = {
          input: keyword,
        };
        const AutocompleteService =
          new google.maps.places.AutocompleteService();
        const result = await AutocompleteService.getPlacePredictions(request);
        return result.predictions;
      } else {
        return [];
      }
    }),
    map((places) => addPlaces(places))
  );
