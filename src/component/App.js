import "../assets/css/App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import Poll from "./Poll";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {props.authedUser === null ? (
        <Login />
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="/add" exact element={<NewPoll />} />
            <Route path="/questions/:id" exact element={<Poll />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUser,
});

export default connect(mapStateToProps)(App);
