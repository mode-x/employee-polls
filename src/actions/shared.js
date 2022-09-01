import { _getUser, _getUsers, _getQuestions } from "../utils/_DATA";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = null;

export function handleInitialData() {
  return async (dispatch) => {
    const polls = await _getQuestions();
    const user = await _getUser("tylermcginnis", "abc321");
    const users = await _getUsers();

    console.log(user);

    dispatch(receivePolls(polls));
    dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
