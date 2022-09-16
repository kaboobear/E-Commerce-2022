export function addOrRemoveArrayElement<T>(array: T[] | null, element: T) {
  const tempArray = array ? [...array] : [];

  if (!tempArray.includes(element)) {
    tempArray.push(element);
  } else {
    tempArray.splice(tempArray.indexOf(element), 1);
  }

  return tempArray;
}
