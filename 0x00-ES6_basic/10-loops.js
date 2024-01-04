/* eslint-disable guard-for-in for this code */
/* eslint-disable no-param-reassign for this code */
export default function appendToEachArrayValue(array, appendString) {
  const myarray = [];
  for (const item of array) {
    myarray.push(appendString + item);
  }

  return myarray;
}
