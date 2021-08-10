/* eslint-disable @typescript-eslint/no-var-requires */
const component = require("./component.template");
const componentTypes = require("./component.types.template");
const componentStories = require("./component.stories.template");
const componentTests = require("./component.test.template");
const componentStyles = require("./component.template.scss");
const componentIndex = require("./component.index.template");

module.exports = [
  component,
  componentTypes,
  componentStories,
  componentTests,
  componentStyles,
  componentIndex
];
