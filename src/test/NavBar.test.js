import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import NavBar from "../component/NavBar";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, middleware);

describe("Login", () => {
  it("will have all expected fields", () => {
    render(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    const home = screen.getByText(/Home/);
    const leaderboard = screen.getByText(/Leaderboard/);
    const newPoll = screen.getByText(/New Poll/);
    const logout = screen.getByText(/Logout/);

    expect(home).toBeInTheDocument();
    expect(leaderboard).toBeInTheDocument();
    expect(newPoll).toBeInTheDocument();
    expect(logout).toBeInTheDocument();
  });

  it("matches the snapshot", () => {
    expect(
      render(
        <Provider store={store}>
          <Router>
            <NavBar />
          </Router>
        </Provider>
      )
    ).toMatchSnapshot();
  });
});
