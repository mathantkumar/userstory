// store.js

import { createStore, applyMiddleware } from "redux";
import { thunk, withExtraArgument } from "redux-thunk";
import rootReducer from "../store/reducer/rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
