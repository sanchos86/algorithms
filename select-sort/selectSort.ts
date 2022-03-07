export const selectSort = <T extends string | number>(unsortedList: T[]): T[] => {
  const sortedList: T[] = [];
  let index = 0;
  let min = unsortedList[0];
  while (unsortedList.length > 0) {
    for (let i = 0; i < unsortedList.length; i++) {
      if (unsortedList[i] < min) {
        min = unsortedList[i];
        index = i;
      }
    }
    sortedList.push(min);
    unsortedList.splice(index, 1);
    min = unsortedList[0];
    index = 0;
  }
  return sortedList;
}
