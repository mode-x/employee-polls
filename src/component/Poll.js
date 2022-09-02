import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PollItem from "./PollItem";

const withRouter = (Component) => {
  const ComponentWithProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithProp;
};

const Poll = (props) => {
  return (
    <div className="w3-container">
      <div className="w3-row w3-center w3-padding-24">
        <img
          src={require(`../${props.user.avatarURL}`)}
          className="w3-circle"
          width={100}
          alt="Alps"
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
              (props.poll.optionOne.votes.length / props.numberOfUsers) * 100
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
              (props.poll.optionTwo.votes.length / props.numberOfUsers) * 100
            }
          />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls, users }, otherProps) => {
  const { id } = otherProps.router.params;

  const allPolls = Object.entries(polls).flatMap((poll) => poll.pop());
  const allUsers = Object.entries(users).flatMap((user) => user.pop());

  const poll = allPolls.filter((poll) => poll.id === id).pop();
  const user = allUsers.filter((user) => user.id === poll.author).pop();

  return {
    id,
    poll,
    user,
    authedUser,
    numberOfUsers: allUsers.length,
    isAnswered: authedUser.answers[id] ? true : false,
    answer: authedUser.answers[id],
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
