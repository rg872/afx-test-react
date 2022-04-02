import { AnyAction, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import { getPlacePredictionsEpic } from "./place/place.epic";
import placeReducer from "./place/place.slice";

const rootReducer = combineReducers({
  place: placeReducer,
});

type State = ReturnType<typeof rootReducer>;
const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, State>();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(epicMiddleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppEpic = Epic<AnyAction, AnyAction, RootState>;

const rootEpic = combineEpics(getPlacePredictionsEpic);

epicMiddleware.run(rootEpic);
