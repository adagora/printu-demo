import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  fetchInitFailure,
  fetchInitSuccess,
} from "../../actions/postsActions/postsActions";
import { initFetchTypes } from "../../Actiontypes/postsTypes";
import { API_URL } from "../../../constant";
import { IInit } from "../../../@types/IInit";

const getInitData = async (): Promise<IInit> => {
  const response = await fetch(`${API_URL}/api/init`);
  return response.json();
};

function* fetchInitDataSaga() {
  try {
    const response: IInit = yield call(getInitData);
    yield put(
      fetchInitSuccess({
        data: response,
      })
    );
  } catch (error) {
    yield put(
      fetchInitFailure({
        error: (error as any).message,
      })
    );
    console.error(error);
  }
}

export default function* initDataSaga() {
  yield all([takeLatest(initFetchTypes.FETCH_INIT_REQUEST, fetchInitDataSaga)]);
}
