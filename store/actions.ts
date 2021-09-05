export const ActionTypes = {
  showSingleDetail: "SHOWSINGLEDETAIL",
  singleDetailInfo: "SINGLEDETAILINFO",
  openTrailerOverlay: "OPENTRAILEROVERLAY",
  resetDAI: "RESETDAI",
};

export type ShowSingleDetail = {
  showSingleDetail: boolean;
  malidForDetail: number;
};

export type SingleDetailInfo = {
  singleDetailInfo: detailAnimeInfo;
  openTrailerOverlay: boolean;
};

import { Action } from "redux";
import { detailAnimeInfo } from "../common/types";

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

export type myActionTypes = showSingleDetail;
export type detailActionTypes =
  | singleDetailInfo
  | openTrailerOverlay
  | resetDAI;
