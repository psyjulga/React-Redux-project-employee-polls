import {
  RECEIVE_USERS,
  UPDATE_USERS_ANSWERS,
  UPDATE_USERS_QUESTIONS,
} from "../actions/users";

function user(state = {}, action) {
  const { qid, answer } = action;
  const { answers } = state;

  return {
    ...state,
    answers: {
      ...answers,
      [qid]: answer,
    },
  };
}

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case UPDATE_USERS_ANSWERS:
      const { authedUser } = action;

      return {
        ...state,
        [authedUser]: user(state[authedUser], action),
      };

    case UPDATE_USERS_QUESTIONS:
      const { id } = action;

      return {
        ...state,
        id,
      };

    default:
      return state;
  }
}
