import { RECEIVE_POLLS, ADD_POLL, UPDATE_POLL } from "../actions/polls";

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.polls,
      };
    case ADD_POLL:
      return {
        ...state,
        [action.poll.id]: action.poll,
      };
    case UPDATE_POLL:
      const poll = state[action.questionId];
      const votes = poll[action.option].votes;
      votes.push(action.user.id);

      return {
        ...state,
        [action.questionId]: poll,
      };
    default:
      return state;
  }
}
