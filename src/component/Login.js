import { useState } from "react";
import { _getUser } from "../utils/_DATA";
import { setAuthedUser } from "../actions/authedUser";
import { connect } from "react-redux";

const Login = (props) => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
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

    if (!userId || !password) {
      setError(true);
      setMessage("Enter username and password");
    } else {
      _getUser(userId, password).then((user) => {
        if (user) {
          setError(false);
          setMessage("");
          props.dispatch(setAuthedUser(user));
        } else {
          setError(true);
          setMessage("Incorrect username or password");
        }
      });
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        {error && (
          <div
            data-testid="error-header"
            className="w3-panel w3-red w3-padding"
          >
            <p>{message}</p>
          </div>
        )}

        <form style={{ minWidth: "300px" }}>
          <div className="w3-container w3-light-gray">
            <div className="w3-row w3-padding-24">
              <h3>Login</h3>
            </div>
            <div className="w3-row">
              <label>Username</label>
              <br />
              <input
                type="text"
                name="username"
                className="w3-input w3-border-0"
                data-testid="username-input"
                value={userId}
                onChange={handleUserIdChange}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type="password"
                name="password"
                className="w3-input w3-border-0"
                data-testid="password-input"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className="w3-row w3-right w3-padding-24">
              <input
                type="submit"
                data-testid="login-btn"
                className="w3-black w3-padding w3-hover-blue-gray w3-border-0"
                value="Login"
                onClick={login}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (props) => props;

export default connect(mapStateToProps)(Login);
