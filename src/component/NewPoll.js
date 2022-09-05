import { useState } from "react";
import { handleAddPoll } from "../actions/polls";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPoll = (props) => {
  const navigate = useNavigate();

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleOptionOneChange = (event) => {
    setOptionOneText(event.target.value);
  };

  const handleOptionTwoChange = (event) => {
    setOptionTwoText(event.target.value);
  };

  const addNewPoll = (event) => {
    event.preventDefault();

    if (!optionOneText || !optionTwoText) {
      setError(true);
      setMessage("Both options must be provided");
    } else {
      props.dispatch(
        handleAddPoll({
          optionOneText,
          optionTwoText,
          author: props.authedUser.id,
        })
      );

      setError(false);
      setMessage("");

      setOptionOneText("");
      setOptionTwoText("");

      navigate("/");
    }
  };

  return (
    <div className="w3-container">
      <div className="w3-row w3-center w3-padding-24">
        <h5>Create your own poll</h5>
        <h2>Would You Rather</h2>
      </div>
      <div className="w3-row">
        {error && (
          <div
            data-testid="error-header"
            className="w3-panel w3-red w3-padding"
          >
            <p>{message}</p>
          </div>
        )}
      </div>
      <div className="w3-row">
        <div
          className="w3-half w3-center"
          style={{ paddingLeft: "16px", paddingRight: "16px" }}
        >
          <label>Option One</label>
          <br />
          <textarea
            type="text"
            name="optionOne"
            rows="3"
            style={{ resize: "none", width: "100%" }}
            data-testid="poll-question-option-1-input"
            onChange={handleOptionOneChange}
          />
        </div>
        <div
          className="w3-half w3-center"
          style={{ paddingLeft: "16px", paddingRight: "16px" }}
        >
          <label>Option Two</label>
          <br />
          <textarea
            type="text"
            name="optionTwo"
            rows="3"
            style={{ resize: "none", width: "100%" }}
            data-testid="poll-question-option-2-input"
            onChange={handleOptionTwoChange}
          />
        </div>
      </div>
      <div className="w3-row w3-center" style={{ marginTop: "24px" }}>
        <input
          type="submit"
          value="Submit"
          data-testid="submit-btn"
          onClick={addNewPoll}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewPoll);
