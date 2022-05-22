import { showLoading, hideLoading } from "react-redux-loading-bar";
import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateUsersQuestions } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ANSWER_QUESTION = "ANSWER_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// "handle" => for async
export function handleAnswerQuestion({ authedUser, qid, answer }) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestionAnswer({
      authedUser,
      qid,
      answer,
    })
      .then(() => {
        dispatch(addAnswer({ authedUser, qid, answer }));
      })
      .then(() => dispatch(hideLoading()));
  };
}

export function handleSaveQuestion(question) {
  return (dispatch) => {
    dispatch(showLoading());

    return _saveQuestion(question)
      .then((formattedQuestion) => {
        dispatch(saveQuestion(formattedQuestion));
        dispatch(updateUsersQuestions(formattedQuestion));
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => console.log("Error from handleSaveQuestion: ", e));
  };
}

function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer,
  };
}

function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
