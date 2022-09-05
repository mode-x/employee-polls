import { _saveQuestion, _saveQuestionAnswer } from "../utils/_DATA";
import { updateQuestions, updateAnswers } from "./users";

export const RECEIVE_POLLS = "RECEIVE_POLLS";
export const ADD_POLL = "ADD_POLL";
export const VOTE_POLL = "VOTE_POLL";
export const UPDATE_POLL = "UPDATE_POLL";

export function receivePolls(polls) {
  return {
    type: RECEIVE_POLLS,
    polls,
  };
}

export function updatePoll(user, questionId, option) {
  return {
    type: UPDATE_POLL,
    user,
    questionId,
    option,
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

    return _saveQuestionAnswer({
      authedUser: authedUser.id,
      qid,
      answer,
    }).then(() => {
      dispatch(updateAnswers(authedUser, qid, answer));
      dispatch(updatePoll(authedUser, qid, answer));
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
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return _saveQuestion(question).then((poll) => {
      dispatch(addPoll(poll));
      dispatch(updateQuestions(authedUser, poll));
    });
  };
}
