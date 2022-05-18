import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, logger);

// thunk executes our async action creators
