import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormSelect from "components/atoms/FormSelect";

describe("FormSelect", () => {
  const mockOnChange = jest.fn();

  const props = {
    value: "value",
    name: "test-name",
    id: "test-id",
    list: [
      { value: "value1", title: "title1" },
      { value: "value2", title: "title2" },
      { value: "value3", title: "title3" },
    ],
    title: "title",
    selected: "value1",
    defaultChoose: "choose an option",
    readonly: false,
    disabled: false,
    dataTestid: "test",
    onChange: mockOnChange,
  };

  it("renders without errors", () => {
    const { getByTestId } = render(<FormSelect {...props} />);
    const select = getByTestId("test");

    expect(select).toBeInTheDocument();
    expect(select).toHaveValue("value1");
    expect(select).toHaveTextContent("choose an option");
    expect(select).toHaveTextContent("title1");
    expect(select).toHaveTextContent("title2");
    expect(select).toHaveTextContent("title3");
  });

  it("calls onChange function when a different option is selected", () => {
    const { getByTestId } = render(<FormSelect {...props} />);
    const select = getByTestId("test");

    fireEvent.change(select, { target: { value: "value3" } });

    expect(mockOnChange).toHaveBeenCalledTimes(1);
  });

  it("renders the default option when defaultChoose prop is present", () => {
    const { getByTestId } = render(<FormSelect {...props} />);
    const select = getByTestId("test");

    expect(select).toHaveTextContent("choose an option");
  });

  it("disables the select element when the disabled prop is true", () => {
    const { getByTestId } = render(<FormSelect {...props} disabled={true} />);
    const select = getByTestId("test");

    expect(select).toBeDisabled();
  });

  it("renders with additional className when className prop is present", () => {
    const { getByTestId } = render(<FormSelect {...props} className="custom-class" />);
    const select = getByTestId("test");

    expect(select).toHaveClass("custom-class");
  });
});
