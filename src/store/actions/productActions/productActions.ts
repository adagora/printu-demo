import { productFetchTypes } from "../../Actiontypes/productTypes";
import {
  FetchProductFailure,
  FetchProductFailurePayload,
  FetchProductSuccess,
  FetchProductSuccessPayload,
} from "../../types/types";

export const fetchProductRequest = (id: string) => ({
  type: productFetchTypes.PRODUCT_FETCH_REQUEST,
  id,
});

export const fetchProductSuccess = (
  payload: FetchProductSuccessPayload
): FetchProductSuccess => ({
  type: productFetchTypes.PRODUCT_FETCH_SUCCESS,
  payload,
});

export const fetchProductFailure = (
  payload: FetchProductFailurePayload
): FetchProductFailure => ({
  type: productFetchTypes.PRODUCT_FETCH_FAILURE,
  payload,
});
