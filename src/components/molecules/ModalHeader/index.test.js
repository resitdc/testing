import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalHeader from "components/molecules/ModalHeader";

describe("ModalHeader", () => {
  it("renders title and close button", () => {
    const title = "Modal Title";
    const closeModal = jest.fn();
    render(<ModalHeader title={title} closeModal={closeModal} />);
    const titleElement = screen.getByText(title);
    const closeButtonElement = screen.getByText(/close/i);
    expect(titleElement).toBeInTheDocument();
    expect(closeButtonElement).toBeInTheDocument();
  });

  it("calls closeModal when close button is clicked", () => {
    const closeModal = jest.fn();
    render(<ModalHeader title="Modal Title" closeModal={closeModal} />);
    const closeButtonElement = screen.getByText(/close/i);
    fireEvent.click(closeButtonElement);
    expect(closeModal).toHaveBeenCalledTimes(1);
  });
});
