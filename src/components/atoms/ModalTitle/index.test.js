import React from "react";
import { render } from "@testing-library/react";
import ModalTitle from "components/atoms/ModalTitle";

describe("ModalTitle", () => {
  it("renders children correctly", () => {
    const { getByText } = render(<ModalTitle>Test Title</ModalTitle>);
    expect(getByText("Test Title")).toBeInTheDocument();
  });
});
