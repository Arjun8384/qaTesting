import React, { useState } from "react";

import {
  render,
  screen,
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Input from "./Input";

describe("Input Component", () => {
  test("renders placeholder", () => {
    render(
      <Input
        value=""
        onChange={() => {}}
        placeholder="Enter Name"
      />
    );

    expect(
      screen.getByPlaceholderText(
        "Enter Name"
      )
    ).toBeInTheDocument();
  });

  test("accepts typing", async () => {
    const TestWrapper = () => {
      const [value, setValue] =
        useState("");

      return (
        <Input
          value={value}
          placeholder="Name"
          onChange={(e) =>
            setValue(e.target.value)
          }
        />
      );
    };

    render(<TestWrapper />);

    const input =
      screen.getByPlaceholderText(
        "Name"
      );

    await userEvent.type(
      input,
      "Amit"
    );

    expect(input).toHaveValue(
      "Amit"
    );
  });
});