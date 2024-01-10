/* eslint-disable array-callback-return for this code */
export default function hasValuesFromArray(set, list) {
  let reply = true;
  list.map((x) => {
    if (!set.has(x)) {
      reply = false;
    }
  });

  return reply;
}
