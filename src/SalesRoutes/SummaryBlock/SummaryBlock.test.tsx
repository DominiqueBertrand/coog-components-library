// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import SummaryBlock from "./SummaryBlock";
import { SummaryBlockProps } from "./SummaryBlock.types";

describe("Test Component", () => {
  let props: SummaryBlockProps;

  beforeEach(() => {
    props = {
      id: "in the kitchen",
      list: []
    };
  });

  const renderComponent = () => render(<SummaryBlock {...props} />);

  it("should render foo text correctly", () => {
    props.id = "in the kitchen";
    props.list = [];

    const { getByTestId } = renderComponent();

    const component = getByTestId("SummaryBlock");

    expect(component).toHaveClass("summary-block-6a9-064f417-50f4-00f8-4e7b");
  });
});
