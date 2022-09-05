import { connect } from "react-redux";

const Leaderboard = (props) => {
  return (
    <div className="w3-container">
      <div className="w3-row w3-center w3-padding-48">
        <div className="w3-half">
          <div className="w3-row">
            <div className="w3-col">Total Users</div>
            <div className="w3-col">
              <h1 style={{ fontWeight: "bold" }}>
                {props.leaderBoardUsers.length}
              </h1>
            </div>
          </div>
        </div>
        <div className="w3-half">
          <div className="w3-row">
            <div className="w3-col">Total Questions</div>
            <div className="w3-col">
              <h1 style={{ fontWeight: "bold" }}>
                {props.leaderBoardUsers
                  .map((item) => item.questions)
                  .reduce((a, b) => a + b, 0)}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w3-row">
        <table className="w3-table w3-striped w3-bordered w3-padding-24">
          <thead>
            <tr>
              <th>Users</th>
              <th>Questions</th>
              <th>Answered</th>
            </tr>
          </thead>
          <tbody>
            {props.leaderBoardUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <img
                    src={require(`../${user.avatarURL}`)}
                    className="w3-circle"
                    width={35}
                    alt={`${user.id}-alt`}
                  ></img>
                  <span>{user.name}</span>
                </td>
                <td>{user.questions}</td>
                <td>{user.answers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const allUsers = Object.entries(users).flatMap((user) => user.pop());

  const leaderBoardUsers = allUsers
    .map((user) => {
      return {
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        questions: user.questions.length,
        answers: Object.keys(user.answers).length,
      };
    })
    .sort((a, b) => {
      return b.questions - a.questions;
    })
    .sort((a, b) => {
      return b.answers - a.answers;
    });

  return {
    leaderBoardUsers,
  };
};

export default connect(mapStateToProps)(Leaderboard);
