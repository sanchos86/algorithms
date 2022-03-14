import { fastSort } from './fastSort';

describe('fastSort.ts', () => {
  it('should return empty array is empty array is passed as a list', () => {
    const list: unknown[] = [];
    const expected: unknown[] = [];
    expect(fastSort(list)).toEqual(expected);
  });

  it('should return passed array if this array consists of one element', () => {
    const list = [99];
    const expected = [99];
    expect(fastSort(list)).toEqual(expected);
  });

  it.each([
    [[1, 99], [1, 99]],
    [[99, 1], [1, 99]],
    [[99, 1, 43, 32, 22, 22, -10, 95, 123], [-10, 1, 22, 22, 32, 43, 95, 99, 123]],
    [['tom', 'ann', 'steve', 'john', 'ken', 'bob', 'lisa'], ['ann', 'bob', 'john', 'ken', 'lisa', 'steve', 'tom']],
  ])('when %j is passed as a list it should return %j', (list, expected) => {
    expect(fastSort<string | number>(list)).toEqual(expected);
  });
});
