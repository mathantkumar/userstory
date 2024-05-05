import { combineReducers } from "redux";
import jobReducer from "./jobReducer"; // Import your jobReducer and other reducers

const rootReducer = combineReducers({
  jobs: jobReducer, // Add other reducers here if needed
});

export default rootReducer;
