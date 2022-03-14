import { binarySearch } from './binarySearch';

const numbers = [1, 2, 4, 9, 22, 100, 324, 400, 555];
const strings = ['ann', 'bob', 'john', 'ken', 'lisa', 'steve', 'tom'];

describe('binarySearch.ts', () => {
  it('should return null if empty array is passed as list', () => {
    expect(binarySearch([], 123)).toBeNull();
  });

  it.each([
    [numbers, 2, 1],
    [numbers, 400, 7],
    [numbers, 555, 8],
    [strings, 'lisa', 4],
    [strings, 'ken', 3],
    [strings, 'ann', 0],
  ])('when %j is passed as a list and %p is an item and item is in the list, it should return %i as item position', (list, item, expected) => {
    expect(binarySearch(list, item)).toBe(expected);
  });

  it.each([
    [numbers, 200, null],
    [numbers, 777, null],
    [numbers, -9, null],
    [strings, 'sam', null],
    [strings, 'jim', null],
    [strings, 'alan', null],
  ])('when %j is passed as a list and %p is an item and item is not in the list, it should return null', (list, item, expected) => {
    expect(binarySearch(list, item)).toBe(expected);
  });
});
