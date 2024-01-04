/* eslint-disable no-unused-vars in this code */
/* eslint-disable no-var in this code */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
