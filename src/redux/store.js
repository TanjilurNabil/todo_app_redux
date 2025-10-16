import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { thunk as thunkMiddleware } from "redux-thunk";
import { rootReducer } from "./rootReducer";

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunkMiddleware)));

export default store;