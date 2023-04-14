import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FormInput from "components/atoms/FormInput";

/*
NOTE FROM RESTU :
there's really a lot that can be tested, but because time is tight I'll only test a few here
*/

describe("FormInput component", () => {
  it("should render FormInput component with name prop", () => {
    const { getByTestId } = render(
      <FormInput dataTestid="form-input" name="testName" />
    );
    const inputElement = getByTestId("form-input");
    expect(inputElement.getAttribute("name")).toBe("testName");
  });

  it("should update value when user types into input", () => {
    const onChangeMock = jest.fn();
    const { getByTestId } = render(
      <FormInput dataTestid="form-input" name="testName" onChange={onChangeMock} />
    );
    const inputElement = getByTestId("form-input");
    fireEvent.change(inputElement, { target: { value: "testValue" } });
    expect(onChangeMock).toHaveBeenCalled();
    expect(inputElement.value).toBe("testValue");
  });

  it("should disable input when disabled prop is true", () => {
    const { getByTestId } = render(
      <FormInput dataTestid="form-input" name="testName" disabled={true} />
    );
    const inputElement = getByTestId("form-input");
    expect(inputElement.disabled).toBe(true);
  });
});
