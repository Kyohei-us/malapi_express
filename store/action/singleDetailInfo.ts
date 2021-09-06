export type SingleDetailInfo = {
  singleDetailInfo: detailAnimeInfo;
  openTrailerOverlay: boolean;
};

import { Action } from "redux";
import { detailAnimeInfo } from "../../common/types";
import { ActionTypes } from "./actions";

interface singleDetailInfo extends Action {
  type: typeof ActionTypes.singleDetailInfo;
  payload: detailAnimeInfo;
}

export const singleDetailInfo = (payload: detailAnimeInfo) => {
  return {
    type: ActionTypes.singleDetailInfo,
    payload: payload,
  };
};

interface openTrailerOverlay extends Action {
  type: typeof ActionTypes.openTrailerOverlay;
  payload: detailAnimeInfo;
}

export const openTrailerOverlay = () => {
  return {
    type: ActionTypes.openTrailerOverlay,
  };
};

interface resetDAI extends Action {
  type: typeof ActionTypes.resetDAI;
  payload: detailAnimeInfo;
}

export const resetDAI = () => {
  return {
    type: ActionTypes.resetDAI,
  };
};

export type detailActionTypes =
  | singleDetailInfo
  | openTrailerOverlay
  | resetDAI;
