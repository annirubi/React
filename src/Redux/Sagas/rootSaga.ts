import { all } from "redux-saga/effects";
import authSaga from "./authSagas";
import postsSaga from "./postsSagas";

export function* rootSaga() {
  yield all([authSaga(), postsSaga()]);
}
