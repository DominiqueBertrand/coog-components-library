module.exports = (componentName) => ({
  content:`// This file is part of Coog. The COPYRIGHT file at the top level of
// this repository contains the full copyright notices and license terms.

export { default } from './${componentName}';
`,
  extension: `.ts`,
  fileName: 'index'
});
