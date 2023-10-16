import { all, fork } from "redux-saga/effects";
import initDataSaga from "./postsSaga/postSaga";
import productSaga from "./productSaga/productSaga";

export function* rootSaga() {
  yield all([fork(initDataSaga), fork(productSaga)]);
}
