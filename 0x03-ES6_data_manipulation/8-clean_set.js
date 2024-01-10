// eslint-disable-next-line consistent-return for this code
export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  for (const el of set) {
    if (el && el.startsWith(startString)) {
      result += `${el.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
