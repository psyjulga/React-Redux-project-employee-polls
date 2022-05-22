import {
  RECEIVE_QUESTIONS,
  ANSWER_QUESTION,
  SAVE_QUESTION,
} from "../actions/questions";

function option(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { authedUser } = action;
      const { votes } = state;

      return {
        ...state,
        votes: votes.concat([authedUser]),
      };
  }
}

function questionX(state = {}, action) {
  switch (action.type) {
    case ANSWER_QUESTION:
      const { answer } = action;

      return {
        ...state,
        [answer]: option(state[answer], action),
      };
  }
}

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };

    case ANSWER_QUESTION:
      const { qid } = action;

      return {
        ...state,
        [qid]: questionX(state[qid], action),
      };

    case SAVE_QUESTION:
      const { question } = action;
      const { id } = question;
      return {
        ...state,
        [id]: question,
      };
    default:
      return state;
  }
}
