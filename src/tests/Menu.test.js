import React from "react";
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Menu from "../components/Menu";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Menu tests", () => {
  test("Should render Menu ", () => {
    const container = render(<Menu />);

    expect(container).toBeDefined();
  });

  test("Menu should navigate to /create when clicking on create btn ", async () => {
    let history = createMemoryHistory();
    history.push("/");

    const { container } = render(
      <Router history={history}>
        <Menu />
      </Router>
    );

    const btn = container.querySelector('[id="create-btn"]');

    user.click(btn);

    expect(history.location.pathname).not.toBe("/");
    expect(history.location.pathname).toEqual('/create')
  });

  test("Menu should navigate to /my-beers when clicking on my beers btn", () => { 
    let history = createMemoryHistory();
    history.push("/");

    const { container } = render(
      <Router history={history}>
        <Menu />
      </Router>
    );

    const btn = container.querySelector('[id="my-beers-btn"]');

    user.click(btn);

    expect(history.location.pathname).not.toBe("/");
    expect(history.location.pathname).toEqual('/my-beers')
  })

  test("Menu should navigate to /s when clicking on othe's beers btn", () => { 
    let history = createMemoryHistory();
    history.push("/create");

    const { container } = render(
      <Router history={history}>
        <Menu />
      </Router>
    );

    const btn = container.querySelector('[id="other-beers-btn"]');

    user.click(btn);

    expect(history.location.pathname).not.toBe("/create");
    expect(history.location.pathname).toEqual('/')
  })
});
