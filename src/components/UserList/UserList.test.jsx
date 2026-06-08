import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";

import UserList from "./UserList";
import { fetchUsers } from "../../services/api";

jest.mock("../../services/api", () => ({
  fetchUsers: jest.fn(),
}));

describe("UserList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("shows loading state", () => {
    fetchUsers.mockImplementation(
      () => new Promise(() => {})
    );

    render(<UserList />);

    expect(
      screen.getByText("Loading...")
    ).toBeInTheDocument();
  });

  test("renders users after successful fetch", async () => {
    fetchUsers.mockResolvedValue([
      {
        id: 1,
        name: "Arjun",
      },
      {
        id: 2,
        name: "John",
      },
    ]);

    render(<UserList />);

    expect(
      await screen.findByText("Arjun")
    ).toBeInTheDocument();

    expect(
      screen.getByText("John")
    ).toBeInTheDocument();
  });

  test("shows error state", async () => {
    fetchUsers.mockRejectedValue(
      new Error("Network Error")
    );

    render(<UserList />);

    await waitFor(() => {
      expect(
        screen.getByRole("alert")
      ).toHaveTextContent(
        "Unable to load users"
      );
    });
  });

  test("shows empty state", async () => {
    fetchUsers.mockResolvedValue([]);

    render(<UserList />);

    expect(
      await screen.findByText(
        "No users available"
      )
    ).toBeInTheDocument();
  });
});