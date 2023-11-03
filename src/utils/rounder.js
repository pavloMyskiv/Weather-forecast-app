export const rounder = (number) => {
  if (typeof number === 'number') {
    return Math.round(number);
  } else {
    return number;
  }
};
