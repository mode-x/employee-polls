import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../component/App";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";

test("renders learn react link", () => {
  const store = createStore(reducer, middleware);

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Username/i);
  expect(linkElement).toBeInTheDocument();
});
