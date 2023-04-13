import React from "react";
import { render } from "@testing-library/react";
import Flex from "components/atoms/Flex";

describe("Flex component", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Flex>
        <div>Test 1</div>
        <div>Test 2</div>
      </Flex>
    );
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });

  it("should have test class name when className prop is provided", () => {
    const { container } = render(<Flex className="test-class" />);
    expect(container.firstChild).toHaveClass("test-class");
  });
});
