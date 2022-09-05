import "../assets/css/App.css";
import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import NavBar from "./NavBar";
import Dashboard from "./Dashboard";
import Login from "./Login";
import Leaderboard from "./Leaderboard";
import NewPoll from "./NewPoll";
import NotFound from "./NotFound";
import Poll from "./Poll";
import { Routes, Route } from "react-router-dom";

const App = ({ dispatch, authedUser }) => {
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div>
      {authedUser === null ? (
        <Login />
      ) : (
        <div>
          <NavBar />
          <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" exact element={<Dashboard />} />
            <Route path="/leaderboard" exact element={<Leaderboard />} />
            <Route path="/add" exact element={<NewPoll />} />
            <Route path="/questions/:question_id" exact element={<Poll />} />
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
