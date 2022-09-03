import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
} from "../utils/_DATA";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";
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
    }).then(() => {
      _getQuestions().then((polls) => {
        dispatch(receivePolls(polls));
      });
    });
  };
}

export function addPoll(poll) {
  return {
    type: ADD_POLL,
    poll,
  };
}

export function handleAddPoll(question) {
  return (dispatch) => {
    return _saveQuestion(question).then((poll) => {
      dispatch(addPoll(poll));
    });
  };
}
