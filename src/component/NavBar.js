import "../assets/css/W3.css";
import { Link } from "react-router-dom";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

const NavBar = (props) => {
  const logout = (event) => {
    event.preventDefault();

    props.dispatch(setAuthedUser(null));
  };

  return (
    <div className="w3-bar w3-border-0 w3-light-grey">
      <Link to="/" className="w3-bar-item w3-button">
        Employee Polls
      </Link>

      <Link to="/" className="w3-bar-item w3-button w3-right" onClick={logout}>
        Logout
      </Link>
      <Link to="/add" className="w3-bar-item w3-button w3-right">
        New Poll
      </Link>
      <Link to="/leaderboard" className="w3-bar-item w3-button w3-right">
        Leaderboard
      </Link>
      <Link to="/" className="w3-bar-item w3-button w3-right">
        Home
      </Link>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
