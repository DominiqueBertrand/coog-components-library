/**
 * Check if value is null or undefined
 * @param {*} value
 */
const checkIsNull = (value: any): boolean => value === undefined || value === null;

 /**
  * Check if value is null or undefined or empty
  * @param {*} value
  */
const checkIsEmpty = (value: any): boolean => value === undefined || value === null || value === '';

 export {
    checkIsNull,
    checkIsEmpty
 }