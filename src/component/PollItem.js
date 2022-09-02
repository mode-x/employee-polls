import { connect } from "react-redux";
import { handleVotePoll } from "../actions/polls";

const PollItem = ({
  dispatch,
  pollId,
  isAnswered,
  answer,
  option,
  question,
  votes,
  percentage,
}) => {
  const vote = (event) => {
    event.preventDefault();

    const answer = event.target.id.split("-").pop();

    dispatch(handleVotePoll(pollId, answer));
  };

  return (
    <div className="w3-container">
      <div
        className={`w3-row w3-light-gray ${
          answer === option ? "w3-border-green" : ""
        }`}
        style={{ border: "4px solid white" }}
      >
        <div className="w3-col w3-padding-16" style={{ height: "100px" }}>
          {question}
        </div>
      </div>
      {isAnswered && (
        <div className="w3-row w3-padding-16">
          <div className="w3-half">
            <div className="w3-row">
              <div className="w3-col">Number of Votes</div>
              <div className="w3-col">{votes}</div>
            </div>
          </div>
          <div className="w3-half">
            <div className="w3-row">
              <div className="w3-col">Percentage of Votes</div>
              <div className="w3-col">{percentage}%</div>
            </div>
          </div>
        </div>
      )}
      {!isAnswered && (
        <div className="w3-row w3-padding-16">
          <button
            id={`button-${option}`}
            className="w3-button w3-circle w3-black w3-hover-blue-gray"
            style={{ width: "70px", height: "70px" }}
            onClick={vote}
          >
            <i
              className="glyphicon glyphicon-thumbs-up"
              style={{ fontSize: "2em" }}
            ></i>
          </button>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(PollItem);
