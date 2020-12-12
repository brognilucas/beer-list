import React, { useContext, useState } from "react";
import { MyBeers, MyBeersProvider } from "../context/MyBeers";
import { render, screen, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import Menu from "../components/Menu";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

describe("Context tests", () => {
  test("Should be able to create a beer ", () => {
    const TestComponent = (props) => {
      const { createBeer, beers } = useContext(MyBeers);

      let mockBeer = {
        name: "Beer 001",
        description: "A random description",
        style: {
          category: {
            name: "Some Category",
          },
        },
      };

      return (
        <>
          <span>Beers Lenght: {beers.length}</span>
          <button onClick={() => createBeer(mockBeer)}> Create </button>
        </>
      );
    };

    const { container } = render(
      <MyBeersProvider>
        <TestComponent />
      </MyBeersProvider>
    );

    expect(container.querySelector("span").textContent).toEqual(
      "Beers Lenght: 0"
    );

    const btn = container.querySelector("button");

    user.click(btn);

    expect(container.querySelector("span").textContent).toEqual(
      "Beers Lenght: 1"
    );
  });
});
