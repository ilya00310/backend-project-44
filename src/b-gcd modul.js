import getrandomNumberforGcd from './utils.js';

const getGcdTwoNumber = (one, two) => {
  const onePartArray = one;
  const twoPartArray = two;
  return twoPartArray === 0
    ? onePartArray : getGcdTwoNumber(twoPartArray, onePartArray % twoPartArray);
};

export default () => {
  const one = getrandomNumberforGcd(1, 100);
  const two = getrandomNumberforGcd(1, 100);
  const question = ([one, two].join(' '));

  const answer = (`${getGcdTwoNumber(one, two)}`);
  return [question, answer];
};
