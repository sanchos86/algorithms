import { arraySum } from './arraySum';

describe('arraySum.ts', () => {
  it.each([
    [[1, 2, 10, 50], 63],
    [[], 0],
    [[-10, 10, 777, -33], 744],
  ])('when %p is passed as a list, result should be %p', (list, expected) => {
    expect(arraySum(list)).toBe(expected);
  });
});
