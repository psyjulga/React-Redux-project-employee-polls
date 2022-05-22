import * as React from "react";
import App from "../components/App";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("App", () => {
  test("should render the loginform onload", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const loginHeading = screen.getByText(/employee polls/i);
    expect(loginHeading).toBeInTheDocument();
  });
});
