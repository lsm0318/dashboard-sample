export const convertToK = (value: number) => {
  if (value < 1000)
    return value;
  else
    return (value / 1000).toFixed(2) + 'K';
}
