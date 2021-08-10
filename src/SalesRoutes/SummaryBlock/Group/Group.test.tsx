// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Group from "./Group";
import { GroupProps } from "./Group.types";

describe("Test Component", () => {
  let props: GroupProps;

  beforeEach(() => {
    props = {
      title: "bar",
      questions: []
    };
  });

  const renderComponent = () => render(<Group {...props} />);

  it("should render foo text correctly", () => {
    props.title = "in the kitchen";
    props.questions = [];
    const { getByTestId } = renderComponent();

    const component = getByTestId("Group");

    // expect(component).toHaveTextContent("in the kitchen");
  });
});
