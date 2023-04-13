import React from "react";
import { render } from "@testing-library/react";
import Nav from "components/atoms/Nav";

describe("Nav component", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Nav>
        <div>Test 1</div>
        <div>Test 2</div>
      </Nav>
    );
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });

  it("should have test class name when className prop is provided", () => {
    const { container } = render(<Nav className="test-class">Test</Nav>);
    expect(container.firstChild).toHaveClass("test-class");
  });
});