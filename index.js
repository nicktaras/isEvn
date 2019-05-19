module.exports = i => {
  if (!i) console.warn('isEven: numeric argument is missing');
  if (!isNaN(i)) console.warn('isEven: argument provided is not a number');
  return (i % 2) ? true : false;
};