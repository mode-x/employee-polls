import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as React from "react";
import Login from "../component/Login";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";

const store = createStore(reducer, middleware);

describe("Login", () => {
  it("will have all expected fields", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const userNameLabel = screen.getByText(/Username/);
    const passwordLabel = screen.getByText(/Password/);
    const firstNameInput = screen.getByTestId("username-input");
    const lastNameInput = screen.getByTestId("password-input");
    const submitButton = screen.getByText("Submit");

    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
