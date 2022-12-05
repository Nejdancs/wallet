export const numberSpace = number => {
  const units = number.toFixed(2).toString().slice(-6);
  const thousands = number.toFixed(2).toString().slice(-9, -6);
  const millions = number.toFixed(2).toString().slice(-13, -9);

  if (millions) return `${millions} ${thousands} ${units}`;
  if (thousands) return `${thousands} ${units}`;

  return units;
};
