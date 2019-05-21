module.exports = i => {
  if (!i) console.warn('isEvn: numeric argument is missing');
  if (!isNaN(i)) console.warn('isEvn: argument provided is not a number');
  return !(i % 2);
};
