import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";

export function handleInitialData() {
  return async (dispatch) => {
    const polls = await _getQuestions();
    const users = await _getUsers();

    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
  };
}
