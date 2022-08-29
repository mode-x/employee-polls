import { _getUsers, _getQuestions } from "../utils/_DATA";
import { receivePolls } from "./polls";
import { receiveUsers } from "./users";
import { setAuthedUser } from "./authedUser";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  return async (dispatch) => {
    const polls = await _getQuestions();
    const users = await _getUsers();
    console.log(polls);
    console.log(users);
    // dispatch(receivePolls(polls));
    // dispatch(receiveUsers(users));
    dispatch(setAuthedUser(AUTHED_ID));
  };
}
