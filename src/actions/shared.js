// receive data / handle initial data api call
// for App.js
// => get questions and users

import { _getInitialData } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

// returns a function
// => for thunk middleware to apply
// to handle async call

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      // = dispatch(action)
      // inside dispatch reducer updates the store
      dispatch(hideLoading());
    });
  };
}

export function handleLogin(AUTHED_ID) {
  return (dispatch) => {
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
