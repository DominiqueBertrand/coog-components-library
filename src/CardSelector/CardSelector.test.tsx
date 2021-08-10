// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import CardSelector from "./CardSelector";
import { CardSelectorProps } from "./CardSelector.types";

describe("Test Component", () => {
  let props: CardSelectorProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<CardSelector {...props} />);

  it("should render foo text correctly", () => {
    props.title = "in the kitchen";
    const { getByTestId } = renderComponent();

    const component = getByTestId("CardSelector");

    expect(component).toHaveTextContent("in the kitchen");
  });
});
