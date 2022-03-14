export const arraySum = (list: number[]): number => {
  if (list.length === 0) {
    return 0;
  }
  const sum = list.pop() as number;
  return sum + arraySum(list);
};
