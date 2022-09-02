import "../assets/css/W3.css";
import { Link } from "react-router-dom";

const NavBar = () => {
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

      <Link to="/add" className="w3-bar-item w3-button w3-green w3-right">
        Logout
      </Link>
    </div>
  );
};

export default NavBar;
