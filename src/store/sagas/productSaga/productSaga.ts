import { all, call, put, takeLatest } from "redux-saga/effects";
import { fetchInitFailure } from "../../actions/postsActions/postsActions";
import { API_URL } from "../../../constant";
import { fetchProductSuccess } from "../../actions/productActions/productActions";
import { productFetchTypes } from "../../Actiontypes/productTypes";
import { IProjectData } from "../../../@types/IProjectData";

const getProductData = async (id: string): Promise<IProjectData> => {
  const response = await fetch(`${API_URL}/api/project/${id}`);
  return response.json();
};

interface FetchProductDataSagaProps {
  type: string;
  id: string;
}

function* fetchProductDataSaga(action: FetchProductDataSagaProps) {
  try {
    const { id } = action;
    const response: IProjectData = yield call(getProductData, id);

    yield put(
      fetchProductSuccess({
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

export default function* productSaga() {
  yield all([
    takeLatest(productFetchTypes.PRODUCT_FETCH_REQUEST, fetchProductDataSaga),
  ]);
}
