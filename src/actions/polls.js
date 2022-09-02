import { _saveQuestionAnswer } from "../utils/_DATA";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const VOTE_POLL = "VOTE_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

export function votePoll(polls) {
  return {
    type: VOTE_POLL,
    polls,
  };
}

export function handleVotePoll(qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    console.log(authedUser.id, qid, answer);

    return _saveQuestionAnswer({
      authedUser: authedUser.id,
      qid,
      answer,
    }).then((poll) => console.log(poll));
  };
}
