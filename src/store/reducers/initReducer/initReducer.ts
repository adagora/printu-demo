import { initFetchTypes } from "../../Actiontypes/postsTypes";
import { InitActions, DataInitState } from "../../types/types";

const initialState: DataInitState = {
  pending: false,
  data: null,
  error: null,
};

export default (state = initialState, action: InitActions) => {
  switch (action.type) {
    case initFetchTypes.FETCH_INIT_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case initFetchTypes.FETCH_INIT_SUCCESS:
      return {
        ...state,
        pending: false,
        data: action.payload.data,
        error: null,
      };
    case initFetchTypes.FETCH_INIT_FAILURE:
      return {
        ...state,
        pending: false,
        data: null,
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};
