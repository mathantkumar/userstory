export const FETCH_JOBS_REQUEST = "FETCH_JOBS_REQUEST";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";
export const SET_LIMIT = "SET_LIMIT";

export const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
});

export const fetchJobsSuccess = (jobs, offset) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: { jobs, offset },
});

export const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
});

export const fetchJobs = async (filters, dispatch) => {
  dispatch(fetchJobsRequest());
  try {
    const response = await fetch(
      "https://api.weekday.technology/adhoc/getSampleJdJSON",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          limit: 900,
          ...filters, // Apply filters
        }),
      }
    );
    const data = await response.json();
    dispatch(fetchJobsSuccess(data.jdList, filters.offset));
  } catch (error) {
    dispatch(fetchJobsFailure(error.message));
  }
};
