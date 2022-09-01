import { useState } from "react";
import { _getUser } from "../utils/_DATA";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const login = (e) => {
    e.preventDefault();
    console.log(userId, password);
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

export default Login;
