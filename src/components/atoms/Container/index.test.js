import React from "react";
import { render } from "@testing-library/react";
import Container from "components/atoms/Container";

describe("Container component", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Container>
        <div>Test 1</div>
        <div>Test 2</div>
      </Container>
    );
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });

  it("should have default class name when default prop is true", () => {
    const { container } = render(<Container default />);
    expect(container.firstChild).toHaveClass("mx-auto px-4 sm:px-6 lg:px-8");
  });

  it("should have test class name when className prop is provided", () => {
    const { container } = render(<Container className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
