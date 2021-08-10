// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import InputField from "./InputField";
import { InputFieldProps } from "./InputField.types";

describe("Test Component", () => {
  let props: InputFieldProps;

  beforeEach(() => {
    props = {
      name: "bar",
      type: "text"
    };
  });

  const renderComponent = () => render(<InputField {...props} />);

  it("should render foo text correctly", () => {
    props.name = "in the kitchen";
    props.type = "text";
    // const { getByTestId } = renderComponent();

    // const component = getByTestId("InputField");

    // expect(component).toHaveTextContent("in the kitchen");
  });
});
