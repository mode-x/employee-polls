import { _getUsers, _getQuestions } from "../utils/api";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (dispatch) => {
    const polls = await _getQuestions();
    const users = await _getUsers();
    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
