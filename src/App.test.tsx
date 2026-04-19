import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
  test("renders heading, logos and counter", async () => {
    render(<App />);

    expect(screen.getByText(/Get started/i)).toBeInTheDocument();
    expect(screen.getByAltText("React logo")).toBeInTheDocument();
    expect(screen.getByAltText("Vite logo")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /Count is 0/i });
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(button).toHaveTextContent("Count is 1");
  });
});
