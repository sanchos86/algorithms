import { factorial } from './factorial';

describe('factorial.ts', () => {
  it.each([
    [4, 24],
    [5, 120],
    [6, 720],
  ])('when num is %p, result should be %p', (num, expected) => {
    expect(factorial(num)).toBe(expected);
  });
});
