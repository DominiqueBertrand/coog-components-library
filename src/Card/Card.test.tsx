// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";
import { CardProps } from "./Card.types";

describe("Test Component", () => {
  let props: CardProps;

  beforeEach(() => {
    props = {
      title: "bar"
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should render foo text correctly", () => {
    props.title = "in the kitchen";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Card");

    expect(component).toHaveTextContent("in the kitchen");
  });
});
