import {
  RECEIVE_USERS,
  UPDATE_ANSWERS,
  UPDATE_QUESTIONS,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case UPDATE_QUESTIONS:
      const questions = action.user.questions;
      questions.push(action.poll.id);
      action.user[questions] = questions;

      return {
        ...state,
        [action.poll.author]: action.user,
      };
    case UPDATE_ANSWERS:
      action.user.answers[action.questionId] = action.option;

      return {
        ...state,
        [action.user.id]: action.user,
      };
    default:
      return state;
  }
}
