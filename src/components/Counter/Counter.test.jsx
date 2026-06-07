import {
  render,
  screen
} from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import Counter from "./Counter";

describe("Counter", () => {

  test("increments count", async () => {

    render(<Counter />);

    const button =
      screen.getByText("Increment");

    await userEvent.click(button);

    expect(
      screen.getByText("1")
    ).toBeInTheDocument();
  });

});