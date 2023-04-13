import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ModalOverlay from "components/atoms/ModalOverlay";

describe("ModalOverlay", () => {
  it("renders modal overlay when open", () => {
    render(<ModalOverlay isOpen={true} />);
    const overlayElement = screen.getByTestId("modal-overlay");
    expect(overlayElement).toBeInTheDocument();
  });

  it("not render modal overlay when closed", () => {
    const { queryByRole } = render(
      <ModalOverlay isOpen={false} closeModal={() => {}}>
        <div>Test</div>
      </ModalOverlay>
    );
    const overlayElement = queryByRole("presentation");
    expect(overlayElement).toBeNull();
  });

  it("call closeModal when modal overlay is clicked", () => {
    const mockCloseModal = jest.fn();
    render(<ModalOverlay isOpen={true} closeModal={mockCloseModal} />);
    const overlayElement = screen.getByTestId("modal-overlay");
    fireEvent.click(overlayElement);
    expect(mockCloseModal).toHaveBeenCalledTimes(1);
  });
});
