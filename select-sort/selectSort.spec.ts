import { selectSort } from './selectSort';

describe('selectSort.ts', () => {
  it('should return empty array if empty array is passed as an unsorted list', () => {
    const unsortedList = [] as number[];
    const sortedList = [] as number[];
    expect(selectSort(unsortedList)).toEqual(sortedList);
  });

  it('should return correctly sorted list #1', () => {
    const unsortedList = [23, 1, -3, 33, 121, 0, 22, 23];
    const sortedList = [-3, 0, 1, 22, 23, 23, 33, 121];
    expect(selectSort(unsortedList)).toEqual(sortedList);
  });

  it('should return correctly sorted list #2', () => {
    const unsortedList = ['tom', 'ann', 'steve', 'john', 'ken', 'bob', 'lisa'];
    const sortedList = ['ann', 'bob', 'john', 'ken', 'lisa', 'steve', 'tom'];
    expect(selectSort(unsortedList)).toEqual(sortedList);
  });
});
