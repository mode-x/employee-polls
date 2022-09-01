import { SET_AUTHED_USER, SET_AUTHED_USER_ID } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  switch (action.type) {
    case SET_AUTHED_USER_ID:
      return action.id;
    case SET_AUTHED_USER:
      return action.user;
    default:
      return state;
  }
}
