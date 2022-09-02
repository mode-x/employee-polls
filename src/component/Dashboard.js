import { useEffect, useState } from "react";
import { connect } from "react-redux";
import Table from "./Table";

const Dashboard = (props) => {
  const [unansweredPolls, setUnansweredPolls] = useState([]);
  const [answeredPolls, setAnsweredPolls] = useState([]);

  const handleChange = (event) => {
    const tab = event.target.id;
    const panel = tab.split("-")[0];

    const panels = document.getElementsByClassName("panels");
    for (let i = 0; i < panels.length; i++) {
      panels[i].style.display = "none";
    }

    const tabs = document.getElementsByClassName("tabs");
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].className = tabs[i].className.replace(" w3-border-orange", "");
    }

    document.getElementById(tab).classList.add("w3-border-orange");
    document.getElementById(panel).style.display = "block";
  };

  const fetchUnansweredPolls = () => {
    const polls = Object.entries(props.polls).flatMap((poll) => poll.pop());

    setUnansweredPolls(
      polls
        .filter(
          (poll) => !Object.keys(props.authedUser.answers).includes(poll.id)
        )
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
    );
  };

  const fetchAnsweredPolls = () => {
    const polls = Object.entries(props.polls).flatMap((poll) => poll.pop());

    setAnsweredPolls(
      polls
        .filter((poll) =>
          Object.keys(props.authedUser.answers).includes(poll.id)
        )
        .sort((a, b) => {
          return b.timestamp - a.timestamp;
        })
    );
  };

  useEffect(() => {
    fetchUnansweredPolls();
    fetchAnsweredPolls();
  }, []);

  return (
    <div>
      <div className="w3-container">
        <div className="w3-row w3-padding-24">
          <div className="w3-col" style={{ width: "80px" }}>
            <img
              src={require(`../${props.authedUser.avatarURL}`)}
              className="w3-circle"
              width={75}
              alt="Alps"
            ></img>
          </div>

          <div className="w3-rest">
            <p className="username">{props.authedUser.name}</p>
            <p className="userinfo pb-0">
              Polls: {props.authedUser.questions.length}
            </p>
            <p className="userinfo pb-0">
              Answers: {Object.keys(props.authedUser.answers).length}
            </p>
          </div>
        </div>

        <h3>Polls</h3>

        <div className="w3-row">
          <div
            id="unanswered-tab"
            className="w3-half tabs w3-bottombar w3-hover-light-grey w3-padding w3-border-orange"
            onClick={handleChange}
          >
            Unanswered
          </div>

          <div
            id="answered-tab"
            className="w3-half tabs w3-bottombar w3-hover-light-grey w3-padding"
            onClick={handleChange}
          >
            Answered
          </div>
        </div>

        <div
          id="unanswered"
          className="w3-container panels"
          style={{ display: "block" }}
        >
          <Table polls={unansweredPolls} />
        </div>

        <div
          id="answered"
          className="w3-container panels"
          style={{ display: "none" }}
        >
          <Table polls={answeredPolls} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, polls }) => ({
  authedUser,
  polls,
});

export default connect(mapStateToProps)(Dashboard);
