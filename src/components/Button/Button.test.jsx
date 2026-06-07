import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("Button Component", () => {

  test("renders button text", () => {
    render(<Button text="Submit" />);

    expect(
      screen.getByText("Submit")
    ).toBeInTheDocument();
  });

  test("button disabled state", () => {
    render(
      <Button
        text="Save"
        disabled={true}
      />
    );

    expect(
      screen.getByRole("button")
    ).toBeDisabled();
  });

  test("calls click handler", async () => {
    const handleClick = jest.fn();

    render(
      <Button
        text="Click Me"
        onClick={handleClick}
      />
    );

    await userEvent.click(
      screen.getByRole("button")
    );

    expect(handleClick)
      .toHaveBeenCalledTimes(1);
  });

});