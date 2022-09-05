import { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import PollItem from "./PollItem";

const withRouter = (Component) => {
  const ComponentWithProp = (props) => {
    const params = useParams();
    return <Component {...props} router={{ params }} />;
  };

  return ComponentWithProp;
};

const Poll = (props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.notFound) {
      navigate("*");
    }
  }, []);

  return (
    <div>
      {!props.notFound && (
        <div className="w3-container">
          <div className="w3-row w3-center w3-padding-24">
            <img
              src={require(`../${props.user.avatarURL}`)}
              className="w3-circle"
              width={100}
              alt={`${props.user.id}`}
            ></img>
            <h5>{`Poll created by ${props.user.id}`}</h5>
            <h2>Would You Rather</h2>
          </div>
          <div className="w3-row">
            <div className="w3-half w3-center">
              <PollItem
                pollId={props.id}
                authedUser={props.authedUser}
                isAnswered={props.isAnswered}
                answer={props.answer}
                option={"optionOne"}
                question={props.poll.optionOne.text}
                votes={props.poll.optionOne.votes.length}
                percentage={
                  (props.poll.optionOne.votes.length / props.numberOfUsers) *
                  100
                }
              />
            </div>
            <div className="w3-half w3-center">
              <PollItem
                pollId={props.id}
                authedUser={props.authedUser}
                isAnswered={props.isAnswered}
                answer={props.answer}
                option={"optionTwo"}
                question={props.poll.optionTwo.text}
                votes={props.poll.optionTwo.votes.length}
                percentage={
                  (props.poll.optionTwo.votes.length / props.numberOfUsers) *
                  100
                }
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, otherProps) => {
  const { question_id } = otherProps.router.params;

  const notFound = !polls[question_id];

  if (notFound) {
    return { notFound };
  } else {
    const allPolls = Object.entries(polls).flatMap((poll) => poll.pop());
    const allUsers = Object.entries(users).flatMap((user) => user.pop());

    const poll = allPolls.filter((poll) => poll.id === question_id).pop();
    const user = allUsers.filter((user) => user.id === poll.author).pop();

    const authedUserAnswers = allPolls.filter(
      (poll) =>
        poll.optionOne.votes.includes(authedUser.id) ||
        poll.optionTwo.votes.includes(authedUser.id)
    );

    const authedUserAnswerIds = authedUserAnswers.map((poll) => poll.id);

    const answer = () => {
      if (poll.optionOne.votes.includes(authedUser.id)) {
        return "optionOne";
      } else if (poll.optionTwo.votes.includes(authedUser.id)) {
        return "optionTwo";
      }
    };

    return {
      id: question_id,
      notFound,
      poll,
      user,
      authedUser,
      numberOfUsers: allUsers.length,
      isAnswered: authedUserAnswerIds.includes(question_id),
      answer: answer(),
    };
  }
};

export default withRouter(connect(mapStateToProps)(Poll));
