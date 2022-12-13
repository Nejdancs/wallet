export const numberSpace = number => {
  if (!number) return '0.00';
  const units = number.toFixed(2).toString().slice(-6);
  const thousands = number.toFixed(2).toString().slice(-9, -6);
  const millions = number.toFixed(2).toString().slice(-12, -9);
  const billions = number.toFixed(2).toString().slice(-15, -12);
  const trillions = number.toFixed(2).toString().slice(-18, -15);

  if (trillions)
    return `${trillions} ${billions} ${millions} ${thousands} ${units}`;
  if (billions) return `${billions} ${millions} ${thousands} ${units}`;
  if (millions) return `${millions} ${thousands} ${units}`;
  if (thousands) return `${thousands} ${units}`;

  return units;
};
