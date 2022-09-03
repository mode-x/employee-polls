export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_POLL_ID = "ADD_POLL_ID";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}
