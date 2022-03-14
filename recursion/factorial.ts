export const factorial = (num: number): number => {
  let result = num;
  if (num === 1) {
    return num;
  }
  return result * factorial(num - 1);
};
