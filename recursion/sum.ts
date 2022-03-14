export const sum = (from: number, to: number): number => {
  let result = from;
  if (from === to) {
    return to;
  }
  return result + sum(from - 1, to);
};
