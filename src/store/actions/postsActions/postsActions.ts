import { initFetchTypes } from "../../Actiontypes/postsTypes";
import {
  FetchInitFailure,
  FetchInitFailurePayload,
  FetchInitRequest,
  FetchInitSuccess,
  FetchInitSuccessPayload,
} from "../../types/types";

export const fetchInitRequest = (): FetchInitRequest => ({
  type: initFetchTypes.FETCH_INIT_REQUEST,
});

export const fetchInitSuccess = (
  payload: FetchInitSuccessPayload
): FetchInitSuccess => ({
  type: initFetchTypes.FETCH_INIT_SUCCESS,
  payload,
});

export const fetchInitFailure = (
  payload: FetchInitFailurePayload
): FetchInitFailure => ({
  type: initFetchTypes.FETCH_INIT_FAILURE,
  payload,
});
