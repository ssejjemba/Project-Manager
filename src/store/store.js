import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./root-reducer";
import logger from "redux-logger";

const middleware = [process.env.NODE_ENV == "development" && logger].filter(
  Boolean
);
const composedEnhancers = compose(applyMiddleware(...middleware));
export const store = createStore(rootReducer, undefined, composedEnhancers);
