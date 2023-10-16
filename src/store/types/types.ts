import { IInit } from "../../@types/IInit";
import { IProjectData } from "../../@types/IProjectData";
import { initFetchTypes } from "../Actiontypes/postsTypes";
import { productFetchTypes } from "../Actiontypes/productTypes";

export interface DataInitState {
  pending: boolean;
  data: IInit | null;
  error: string | null;
}

export interface DataProductState {
  pending: boolean;
  data: IProjectData | null;
  error: string | null;
}

export interface FetchInitSuccessPayload {
  data: IInit;
}

export interface FetchProductSuccessPayload {
  data: IProjectData;
}

export interface FetchInitFailurePayload {
  error: string;
}

export interface FetchProductFailurePayload {
  error: string;
}

export interface FetchInitRequest {
  type: typeof initFetchTypes.FETCH_INIT_REQUEST;
}

export interface FetchProductRequestPayload {
  id: string;
}

export interface FetchProductRequest {
  type: typeof productFetchTypes.PRODUCT_FETCH_REQUEST;
  payload: FetchProductRequestPayload;
}

export type FetchInitSuccess = {
  type: typeof initFetchTypes.FETCH_INIT_SUCCESS;
  payload: FetchInitSuccessPayload;
};

export type FetchProductSuccess = {
  type: typeof productFetchTypes.PRODUCT_FETCH_SUCCESS;
  payload: FetchProductSuccessPayload;
};

export type FetchInitFailure = {
  type: typeof initFetchTypes.FETCH_INIT_FAILURE;
  payload: FetchInitFailurePayload;
};

export type FetchProductFailure = {
  type: typeof productFetchTypes.PRODUCT_FETCH_FAILURE;
  payload: FetchProductFailurePayload;
};

export type InitActions =
  | FetchInitRequest
  | FetchInitSuccess
  | FetchInitFailure;

export type ProductActions =
  | FetchProductRequest
  | FetchProductSuccess
  | FetchProductFailure;
