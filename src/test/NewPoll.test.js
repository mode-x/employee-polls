import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import NewPoll from "../component/NewPoll";
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
          <NewPoll />
        </Router>
      </Provider>
    );

    const optionOneLabel = screen.getByText(/Option One/);
    const optionTwoLabel = screen.getByText(/Option Two/);
    const optionOneInput = screen.getByTestId("poll-question-option-1-input");
    const optionTwoInput = screen.getByTestId("poll-question-option-2-input");
    const submitButton = screen.getByTestId("submit-btn");

    expect(optionOneLabel).toBeInTheDocument();
    expect(optionTwoLabel).toBeInTheDocument();
    expect(optionOneInput).toBeInTheDocument();
    expect(optionTwoInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
