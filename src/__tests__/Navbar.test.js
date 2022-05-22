import * as React from "react";
import Navbar from "../components/Navbar";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("Navbar", () => {
  test("should render all links correctly", async () => {
    render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/home/i);
    const newPollLink = screen.getByText(/new poll/i);
    const leaderboardLink = screen.getByText(/leaderboard/i);

    expect(homeLink).toBeInTheDocument();
    expect(newPollLink).toBeInTheDocument();
    expect(leaderboardLink).toBeInTheDocument();
  });
});

describe("Navbar", () => {
  test("should match snapshot", async () => {
    const navbar = render(
      <MemoryRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </MemoryRouter>
    );

    expect(navbar).toMatchSnapshot();
  });
});
