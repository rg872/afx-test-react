import { Action, AnyAction, combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware, Epic } from "redux-observable";
import uiReducer from "./ui/ui.slice";
import catReducer from "./cats/cats.slice";
import { getCatFactEpic } from "./cats/cats.epic";

const rootReducer = combineReducers({
  ui: uiReducer,
  cat: catReducer,
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

const rootEpic = combineEpics(getCatFactEpic);

epicMiddleware.run(rootEpic);
