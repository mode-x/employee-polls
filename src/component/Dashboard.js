import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

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
              width={60}
              alt="Alps"
            ></img>
          </div>

          <div className="w3-rest">{props.authedUser.name}</div>
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
          <table className="w3-table w3-striped w3-bordered w3-padding-24">
            <thead>
              <tr>
                <th>Option 1</th>
                <th>Option 2</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {unansweredPolls.map((unansweredPoll) => (
                <tr key={unansweredPoll.id}>
                  <td>{unansweredPoll.optionOne.text}</td>
                  <td>{unansweredPoll.optionTwo.text}</td>
                  <td>
                    {" "}
                    <Link
                      to={`questions/${unansweredPoll.id}`}
                      className="w3-button"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          id="answered"
          className="w3-container panels"
          style={{ display: "none" }}
        >
          <table className="w3-table w3-striped w3-bordered w3-padding-24">
            <thead>
              <tr>
                <th>Option 1</th>
                <th>Option 2</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {answeredPolls.map((answeredPoll) => (
                <tr key={answeredPoll.id}>
                  <td>{answeredPoll.optionOne.text}</td>
                  <td>{answeredPoll.optionTwo.text}</td>
                  <td>
                    {" "}
                    <Link
                      to={`questions/${answeredPoll.id}`}
                      className="w3-button"
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
