import { render, screen } from "@testing-library/react";
import { HelloClientComponent } from "./helloClientComponent";
import { HelloServerComponent } from "./helloServerComponent";

describe("hello component", () => {
  it("should render client component", () => {
    render(<HelloClientComponent />);

    expect(screen.getByText("hello world")).toBeInTheDocument();
  });

  it("should render server component", () => {
    render(<HelloServerComponent />);

    expect(screen.getByText("hello world")).toBeInTheDocument();
  });
});
