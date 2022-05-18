import { legacy_createStore as createStore } from "redux";

import reducer from "./reducers";
// the combined reducer from the index.js

import middleware from "./middleware";
// applied middleware from the index.js

const store = createStore(reducer, middleware);

export default store;
