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
    <div className="w3-bar w3-border w3-light-grey">
      <Link to="/" className="w3-bar-item w3-button">
        Home
      </Link>
      <Link to="/leaderboard" className="w3-bar-item w3-button">
        Leaderboard
      </Link>
      <Link to="/add" className="w3-bar-item w3-button">
        New
      </Link>

      <div className="w3-right">
        <span className="w3-bar-item avatar-padding">
          <img
            src={require(`../${props.authedUser.avatarURL}`)}
            className="w3-circle"
            width={35}
            alt="Alps"
          ></img>
        </span>
        <Link
          to="/add"
          className="w3-bar-item w3-button w3-green"
          onClick={logout}
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(NavBar);
