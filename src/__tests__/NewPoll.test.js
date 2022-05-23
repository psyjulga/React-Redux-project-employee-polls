import * as React from "react";
import NewPoll from "../components/NewPoll";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("NewPoll", () => {
  test("should enable the submit button when both inputs have an input value", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const inputOne = screen.getByTestId("test-option-one");
    const inputTwo = screen.getByTestId("test-option-two");
    const submitButton = screen.getByTestId("test-submit-button");

    expect(submitButton).toHaveAttribute("disabled");

    fireEvent.change(inputOne, { target: { value: "first value" } });
    fireEvent.change(inputTwo, { target: { value: "second value" } });

    expect(submitButton).not.toHaveAttribute("disabled");
  });
});
