import {
  detailActionTypes,
  myActionTypes,
  ShowSingleDetail,
  SingleDetailInfo,
} from "./actions";

const initialState: ShowSingleDetail = {
  showSingleDetail: false,
  malidForDetail: -1,
};

const initialStateDetail: SingleDetailInfo = {
  singleDetailInfo: {
    image: "",
    title: "",
    malid: -1,
    title_japanese: "",
    trailer_url: "",
    synopsis: "",
    genres: [],
  },
  openTrailerOverlay: false,
};

export const reducer = (state = initialState, action: myActionTypes) => {
  switch (action.type) {
    case "SHOWSINGLEDETAIL":
      return {
        showSingleDetail: !state.showSingleDetail,
        malidForDetail: action.payload,
      };
    default:
      return state;
  }
};

export const detailReducer = (
  state = initialStateDetail,
  action: detailActionTypes
): SingleDetailInfo => {
  switch (action.type) {
    case "SINGLEDETAILINFO":
      return {
        singleDetailInfo: action.payload,
        openTrailerOverlay: state.openTrailerOverlay,
      };
    case "OPENTRAILEROVERLAY":
      return {
        singleDetailInfo: state.singleDetailInfo,
        openTrailerOverlay: !state.openTrailerOverlay,
      };
    case "RESETDAI":
      return {
        singleDetailInfo: initialStateDetail.singleDetailInfo,
        openTrailerOverlay: initialStateDetail.openTrailerOverlay,
      };
    default:
      return state;
  }
};
