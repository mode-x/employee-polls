import { render, screen, fireEvent } from "@testing-library/react";
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
    const userNameInput = screen.getByTestId("username-input");
    const passwordInput = screen.getByTestId("password-input");
    const loginButton = screen.getByTestId("login-btn");

    expect(userNameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();
    expect(userNameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    fireEvent.change(userNameInput, { target: { value: "sarahedo" } });
    expect(userNameInput.value).toEqual("sarahedo");
  });

  it("will display an error message when no username or password is provided", () => {
    render(
      <Provider store={store}>
        <Login />
      </Provider>
    );

    const loginButton = screen.getByTestId("login-btn");

    fireEvent.click(loginButton);
    expect(screen.getByTestId("error-header")).toBeInTheDocument();
  });
});
