import { combineReducers } from "redux";
import { all } from "typed-redux-saga";
import book from "./bookReducer";

import { bookSaga } from "../saga/bookSaga";

const rootReducer = combineReducers({
  book,
});

export function* rootSaga() {
  yield* all([bookSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
