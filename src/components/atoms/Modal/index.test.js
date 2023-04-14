import React from "react";
import { render, screen } from "@testing-library/react";
import Modal from "components/atoms/Modal";

describe("Modal", () => {
  it("should render children", () => {
    const { getByText } = render(
      <Modal isOpen={true}>
        <div>Test 1</div>
        <div>Test 2</div>
      </Modal>
    );
    expect(getByText("Test 1")).toBeInTheDocument();
    expect(getByText("Test 2")).toBeInTheDocument();
  });

  it("renders modal when open", () => {
    render(
      <Modal isOpen={true}>
        <div data-testid="modal-children">Test</div>
      </Modal>
    );

    expect(screen.getByTestId("modal-children")).toBeInTheDocument();
  });

  it("does not render modal when closed", () => {
    const { queryByRole } = render(
      <Modal isOpen={false}>
        <div data-testid="modal-children">Test</div>
      </Modal>
    );

    const overlayElement = queryByRole("presentation");
    expect(overlayElement).toBeNull();
  });
});
