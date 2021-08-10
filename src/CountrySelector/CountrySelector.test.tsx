// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import CountrySelector from "./CountrySelector";
import { CountrySelectorProps } from "./CountrySelector.types";

describe("Test Component", () => {
  let props: CountrySelectorProps;

  beforeEach(() => {
    props = {
      eventEmitter: (id: number) => console.log(`eventEmitter::${id}`)
    };
  });

  const renderComponent = () => render(<CountrySelector {...props} />);

  it("should render foo text correctly", () => {
    props.eventEmitter = (id: number) => console.log(`eventEmitter::${id}`);
    const { getByTestId } = renderComponent();

    const component = getByTestId("CountrySelector");

    // expect(component).toHaveTextContent("in the kitchen");
  });
});
