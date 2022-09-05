export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_QUESTIONS = "UPDATE_QUESTIONS";
export const UPDATE_ANSWERS = "UPDATE_ANSWERS";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function updateQuestions(user, poll) {
  return {
    type: UPDATE_QUESTIONS,
    user,
    poll,
  };
}

export function updateAnswers(user, questionId, option) {
  return {
    type: UPDATE_ANSWERS,
    user,
    questionId,
    option,
  };
}
