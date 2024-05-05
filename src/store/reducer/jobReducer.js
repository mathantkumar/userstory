// jobReducer.js

import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actions/jobActions";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        jobs:
          action.payload.offset > 0
            ? [...state.jobs, ...action.payload.jobs]
            : action.payload.jobs,
        loading: false,
        error: null,
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default jobReducer;
