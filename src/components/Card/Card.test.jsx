import { render, screen } from "@testing-library/react";
import Card from "./Card";

describe("Card Component", () => {

  test("renders title", () => {
    render(
      <Card
        title="Test Card"
        description="Testing"
      />
    );

    expect(
      screen.getByText("Test Card")
    ).toBeInTheDocument();
  });

  test("renders description", () => {
    render(
      <Card
        title="Test"
        description="Description"
      />
    );

    expect(
      screen.getByText("Description")
    ).toBeInTheDocument();
  });

});