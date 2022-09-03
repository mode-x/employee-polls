import { useState } from "react";
import { handleAddPoll } from "../actions/polls";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const NewPoll = (props) => {
  const navigate = useNavigate();

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

    props.dispatch(
      handleAddPoll({
        optionOneText,
        optionTwoText,
        author: props.authedUser.id,
      })
    );

    setOptionOneText("");
    setOptionTwoText("");

    navigate("/");
  };

  return (
    <div className="w3-container">
      <div className="w3-row w3-center w3-padding-24">
        <img
          src={require(`../${props.authedUser.avatarURL}`)}
          className="w3-circle"
          width={100}
          alt={`${props.authedUser.id}`}
        ></img>
        <h5>{`New Poll by ${props.authedUser.id}`}</h5>
        <h2>Would You Rather</h2>
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
        <input type="submit" value="Submit" onClick={addNewPoll} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NewPoll);
