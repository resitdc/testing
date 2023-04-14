import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormTextarea from "components/atoms/FormTextarea";

describe("FormTextarea", () => {
  const mockOnChange = jest.fn();

  const props = {
    name: "test-name",
    id: "test-id",
    value: "test",
    placeholder: "test placeholder",
    onChange: mockOnChange,
    required: true,
    readonly: false,
    disabled: false,
    dataTestid: "test",
    rows: "4",
    cols: "40",
  };

  it("renders without errors", () => {
    const { getByTestId } = render(<FormTextarea {...props} />);
    const textarea = getByTestId("test");

    expect(textarea).toBeInTheDocument();
    expect(textarea).toHaveValue("test");
    expect(textarea).toHaveAttribute("placeholder", "test placeholder");
    expect(textarea).toHaveAttribute("rows", "4");
    expect(textarea).toHaveAttribute("cols", "40");
    expect(textarea).toBeRequired();
    expect(textarea).toBeEnabled();
  });

  it("calls onChange function when value is changed", () => {
    const { getByTestId } = render(<FormTextarea {...props} />);
    const textarea = getByTestId("test");

    fireEvent.change(textarea, { target: { value: "new value" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("disables the textarea when the disabled prop is true", () => {
    const { getByTestId } = render(<FormTextarea {...props} disabled={true} />);
    const textarea = getByTestId("test");

    expect(textarea).toBeDisabled();
  });

  it("renders with additional className when className prop is present", () => {
    const { getByTestId } = render(<FormTextarea {...props} className="custom-class" />);
    const textarea = getByTestId("test");

    expect(textarea).toHaveClass("custom-class");
  });
});
