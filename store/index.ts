import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailReducer, reducer, searchByQueryReducer } from "./reducer";

const RootReducer = combineReducers({
  showSingleDetail: reducer,
  singleDetailInfo: detailReducer,
  searchByQuery: searchByQueryReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

const store = createStore(RootReducer, composeWithDevTools());

export default store;
