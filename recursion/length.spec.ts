import { length } from './length';

describe('length.ts', () => {
  it.each([
    [[4, 3, 3, 1], 4],
    [[], 0],
    [[1, 1, 1, 1, 1, 1], 6],
  ])('when %p is passed as a list, result should be %p', (list, expected) => {
    expect(length(list)).toBe(expected);
  });
});
