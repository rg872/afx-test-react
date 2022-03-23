import { concatMap, delay, filter, map, mergeMap, tap } from "rxjs/operators";
import { togglePageLoading } from "../ui/ui.slice";
import { fromFetch } from "rxjs/fetch";
import { getCatFact, newFact } from "./cats.slice";
import { AppEpic, RootState, store } from "../store";
import { Fact, GetFactResponse } from "./cats.type";

export const getCatFactEpic: AppEpic = (action$) => {
  return action$.pipe(
    filter(getCatFact.match),
    tap(() => store.dispatch(togglePageLoading(true))),
    delay(1500),
    mergeMap(() =>
      fromFetch("https://cat-fact.herokuapp.com/facts").pipe(
        concatMap((res) => res.json())
      )
    ),
    tap(() => store.dispatch(togglePageLoading(false))),
    map((data: GetFactResponse[]) => {
      const payload: Fact = {
        text: data[0].text,
        user: data[0].user,
        createdAt: new Date(data[0].createdAt),
        updatedAt: new Date(data[0].updatedAt),
      };
      return newFact(payload);
    })
  );
};
