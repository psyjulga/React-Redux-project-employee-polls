// receive data / handle initial data api call
// for App.js
// => get questions

import { _getQuestions } from "../utils/_DATA";
import { receiveQuestions } from "./questions";
// import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "sarahedo";
// TO DO: choose a user in dropdown

// returns a function
// => for thunk middleware to apply
// to handle async call

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return _getQuestions().then((questions) => {
      // dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      // = dispatch(action)
      // inside dispatch reducer updates the store
      dispatch(hideLoading());
    });
  };
}
