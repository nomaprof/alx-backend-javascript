/* eslint-disable no-param-reassign for this code*/
export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    for (const [key, value] of map) {
      if (value === 1) {
        map.set(key, 100);
      }
    }

    return map;
  }

  throw new Error('Cannot process');
}
