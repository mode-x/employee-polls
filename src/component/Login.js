import { useState } from "react";
import { _getUser } from "../utils/_DATA";
import { setAuthedUser, setAuthedUserId } from "../actions/authedUser";
import { connect } from "react-redux";

const Login = (props) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();

    _getUser(userId, password).then((user) => {
      props.dispatch(setAuthedUserId(user.id));
      props.dispatch(setAuthedUser(user));
    });
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <form>
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            data-testid="username-input"
            value={userId}
            onChange={handleUserIdChange}
          />
          <br />
          <label>Password:</label>
          <br />
          <input
            type="text"
            name="password"
            data-testid="password-input"
            value={password}
            onChange={handlePasswordChange}
          />
          <br />
          <input type="submit" value="Submit" onClick={login} />
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(Login);
