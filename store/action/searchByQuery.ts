export type SearchByQuery = {
  query: string;
};

import { Action } from "redux";
import { ActionTypes } from "./actions";

interface searchByQuery extends Action {
  type: typeof ActionTypes.searchByQuery;
  payload: string;
}

export const searchByQuery = (payload: string) => {
  return {
    type: ActionTypes.searchByQuery,
    payload: payload,
  };
};

export type searchByQueryTypes = searchByQuery;
