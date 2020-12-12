import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import List from "../components/List/List";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("List tests", () => {
  test("Should show a list of items ", () => {
    const history = createMemoryHistory();
    history.push("/");

    const MockBeerList = () => {
      return (
        <List
          isPaginated={false}
          beers={[
            {
              id: Math.random(36).toString(),
              name: "Beer 001",
              description: "Description 001",
            },
            {
              id: Math.random(36).toString(),
              name: "Beer 002",
              description: "Desc 002",
            },
            {
              id: Math.random(36).toString(),
              name: "Beer 003",
              description: "Desc 003",
            },
          ]}
        />
      );
    };

    const { container } = render(
      <Router history={history}>
        <MockBeerList />
      </Router>
    );

    expect(
      container.querySelectorAll('[aria-label="beer-item"]').length
    ).toEqual(3);
  });
});
