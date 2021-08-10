// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Markdown from "./Markdown";
import { MarkdownProps } from "./Markdown.types";

describe("Test Component", () => {
  let props: MarkdownProps;

  beforeEach(() => {
    props = {
      string: "bar"
    };
  });

  const renderComponent = () => render(<Markdown {...props} />);

  it("should render foo text correctly", () => {
    props.string= "Hello **big** *World* !"
    const { getByTestId } = renderComponent();

    const component = getByTestId("Markdown");

    expect(component).toHaveTextContent("Hello big World !");
  });
});
