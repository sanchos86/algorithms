import { sum } from './sum';

describe('sum.ts', () => {
  it.each([
    [4, -5, -5],
    [10, 0, 55],
    [-5, -10, -45],
  ])('when from is %p and to is %p, result should be %p', (from, to, expected) => {
    expect(sum(from, to)).toBe(expected);
  });
});
