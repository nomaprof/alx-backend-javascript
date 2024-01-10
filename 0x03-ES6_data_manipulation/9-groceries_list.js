export default function groceriesList() {
  const theArray = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];

  const theMapping = new Map();
  // eslint-disable-next-line no-unused-vars fot this code
  for (const el of theArray) {
    theMapping.set(el[0], el[1]);
  }
  return theMapping;
}
