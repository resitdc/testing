import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalHeader from "components/molecules/ModalHeader";

describe("ModalHeader", () => {
  it("renders title and close button", () => {
    const title = "Modal Title";
    const onClose = jest.fn();
    render(<ModalHeader title={title} onClose={onClose} />);
    const titleElement = screen.getByText(title);
    const closeButtonElement = screen.getByText(/close/i);
    expect(titleElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    render(<ModalHeader title="Modal Title" onClose={onClose} />);
    const closeButtonElement = screen.getByText(/close/i);
    fireEvent.click(closeButtonElement);
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
