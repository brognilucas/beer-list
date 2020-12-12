import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BeerListItem from "../components/List/BeerListItem";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import user from "@testing-library/user-event";

describe("BeerListItem ", () => {
  test("Should render the information about the beer", () => {
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <BeerListItem
          beer={{
            name: "Lucas' Beer",
            description: "beer desc",
          }}
        />
      </Router>
    );

    expect(container.querySelector('[id="beer-info"]')).toBeDefined();
    expect(container.querySelector('[id="beer-name"]').textContent).toContain(
      "Lucas' Beer"
    );
  });

  test("Should on click beer-name go to detail page", () => {
    const history = createMemoryHistory();

    const { container } = render(
      <Router history={history}>
        <BeerListItem
          beer={{
            id: "001",
            name: "Lucas' Beer",
            description: "beer desc",
          }}
        />
      </Router>
    );

    const beerName = container.querySelector('[id="beer-name"]');
    expect(beerName).toBeDefined();

    user.click(beerName);

    expect(history.location.pathname).toContain("/001");
  });
});
