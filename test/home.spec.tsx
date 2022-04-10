import { render, screen } from "@testing-library/react";
import Home from "../src/pages";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /hello rafo/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
