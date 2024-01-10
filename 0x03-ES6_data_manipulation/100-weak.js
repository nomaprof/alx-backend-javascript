const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let requested = weakMap.get(endpoint) || 0;
  weakMap.set(endpoint, requested -= -1);
  if (requested >= 5) throw new Error('Endpoint load is high');
  return requested;
};

export { weakMap, queryAPI };
