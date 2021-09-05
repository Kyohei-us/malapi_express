import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailReducer, reducer } from "./reducer";

const RootReducer = combineReducers({
  showSingleDetail: reducer,
  singleDetailInfo: detailReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer, composeWithDevTools());

export default store;
