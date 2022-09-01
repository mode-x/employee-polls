export const SET_AUTHED_USER_ID = "SET_AUTHED_USER_ID";

export function setAuthedUserId(id) {
  return {
    type: SET_AUTHED_USER_ID,
    id,
  };
}

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export function setAuthedUser(user) {
  return {
    type: SET_AUTHED_USER,
    user,
  };
}
