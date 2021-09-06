export type ShowSingleDetail = {
  showSingleDetail: boolean;
  malidForDetail: number;
};

import { Action } from "redux";
import { ActionTypes } from "./actions";

interface showSingleDetail extends Action {
  type: typeof ActionTypes.showSingleDetail;
  payload: number;
}

export const showSingleDetail = (payload: number) => {
  return {
    type: ActionTypes.showSingleDetail,
    payload: payload,
  };
};

export type myActionTypes = showSingleDetail;
