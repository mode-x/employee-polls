const PollItem = ({
  isAnswered,
  answer,
  option,
  question,
  votes,
  percentage,
}) => {
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
            className="w3-button w3-circle w3-black w3-hover-blue-gray"
            style={{ width: "70px", height: "70px" }}
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

export default PollItem;
