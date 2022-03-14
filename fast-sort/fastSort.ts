export const fastSort = <T>(list: T[]): T[] => {
  if (list.length < 2) {
    return list;
  }
  const support = list[0];
  const left = [];
  const right = [];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < support) {
      left.push(list[i]);
    } else {
      right.push(list[i]);
    }
  }
  return [...fastSort(left), support, ...fastSort(right)];
};
