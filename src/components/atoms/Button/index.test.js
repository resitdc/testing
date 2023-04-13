import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "components/atoms/Button";

describe("Button component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<Button>Click</Button>);
    expect(getByText("Click")).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click</Button>);
    fireEvent.click(getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables button when isLoading is true", () => {
    const { getByText } = render(<Button isLoading>Click</Button>);
    expect(getByText("LOADING...")).toBeInTheDocument();
    expect(getByText("LOADING...")).toBeDisabled();
  });

  it("applies correct size and color classes based on props", () => {
    const { container, rerender } = render(<Button color="primary">Click</Button>);
    expect(container.firstChild).toHaveClass("text-white-1 bg-primary");
    rerender(<Button size="sm">Click</Button>);
    expect(container.firstChild).toHaveClass("text-sm");
  });
});
