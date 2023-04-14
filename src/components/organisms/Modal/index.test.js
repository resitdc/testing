import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "components/organisms/Modal";

describe("Modal component", () => {
  it("should render Modal component with children", () => {
    const { getByText } = render(
      <Modal isOpen={true} onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    );
    expect(getByText("Modal Content")).toBeInTheDocument();
  });

  it("should not render Modal component when isOpen is false", () => {
    const { queryByRole } = render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Test</div>
      </Modal>
    );

    const overlayElement = queryByRole("presentation");
    expect(overlayElement).toBeNull();
  });

  it("should call onClose when clicking on close button", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Modal isOpen={true} onClose={onClose}>
        <div>Modal Content</div>
      </Modal>
    );

    const closeButton = getByText("Close");
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
