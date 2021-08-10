// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import GoogleAdressField from "./GoogleAddressField";
import { GoogleAddressFieldProps } from "./GoogleAddressField.types";

describe("Test Component", () => {
  let props: GoogleAddressFieldProps;

  beforeEach(() => {
    props = {
      apiKey: "xxxx",
      eventEmitter: (id: number) => console.log(`eventEmitter::${id}`)
    };
  });

  const renderComponent = () => render(<GoogleAdressField {...props} />);

  it("should render foo text correctly", () => {
    props.apiKey = "xxxx";
    const { getByTestId } = renderComponent();

    const component = getByTestId("GoogleAdressField");

    // expect(component).toHaveTextContent("xxxx");
  });
});
