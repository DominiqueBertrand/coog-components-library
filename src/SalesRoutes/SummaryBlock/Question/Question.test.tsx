// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

import React from "react";
import { render } from "@testing-library/react";

import Question from "./Question";
import { QuestionProps } from "./Question.types";

describe("Test Component", () => {
  let props: QuestionProps;

  beforeEach(() => {
    props = {
      id: "test",
      question: "test",
      answer: "test"
    };
  });

  const renderComponent = () => render(<Question {...props} />);

  it("should render foo text correctly", () => {
    props.id = "test";
    props.question = "test";
    props.answer = "test";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Question");

    expect(component).toHaveTextContent("test");
  });
});
