export const length = (list: number[]): number => {
  if (!(0 in list)) {
    return 0;
  }
  return 1 + length(list.slice(0, list.length - 1));
}
