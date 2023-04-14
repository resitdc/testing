import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalButtonClose from "components/atoms/ModalButtonClose";

describe("ModalButtonClose", () => {
  it("should render children", () => {
    const text = "Close";
    render(<ModalButtonClose>{text}</ModalButtonClose>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("should call onClick function when clicked", () => {
    const mockOnClick = jest.fn();
    render(<ModalButtonClose onClick={mockOnClick}>Close</ModalButtonClose>);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
