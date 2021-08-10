// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import List from "./Questions";
import { QuestionsProps } from "./Questions.types";

describe("Test Component", () => {
  let props: QuestionsProps;

  beforeEach(() => {
    props = {
      id: "in the kitchen",
      questions: [],
      title: "in the kitchen"
    };
  });

  const renderComponent = () => render(<List {...props} />);

  it("should render foo text correctly", () => {
    props.id = "in the kitchen";
    const { getByTestId } = renderComponent();

    const component = getByTestId("List");

    expect(component).toHaveTextContent("in the kitchen");
  });
});
