module.exports = (componentName) => ({
  content: `// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

@import "../variables.scss";
@import "../typography.scss";

.foo-bar {
  @include font-defaults;

  color: $coog-green;
}
`,
  extension: `.scss`
});
