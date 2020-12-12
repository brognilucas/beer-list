import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import CreateBeer from "../components/Create/CreateBeer";

describe("Create Beer tests ", () => {
  test("Should be able to create a beer ", async () => {
    const mockFn = jest.fn();

    const categories = [];

    const MockCreate = () => {
      return <CreateBeer categories={categories} submit={mockFn} />;
    };

    const { getByLabelText, container } = render(<MockCreate />);

    await act(async () => {
      const descInput = container.querySelector('[id="description"]');
      fireEvent.change(getByLabelText("Name"), {
        target: { value: "Beer" },
      });
      fireEvent.change(descInput, {
        target: { value: "Beer description" },
      });
    });

    await act(async () => {
      const btn = container.querySelector('[type="submit"]');
      user.click(btn);
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
