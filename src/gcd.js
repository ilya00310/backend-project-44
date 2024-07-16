import getrandomNumberforGcd from './utils.js';

const getGcdTwoNumber = (one, two) => (two === 0
  ? one : getGcdTwoNumber(two, one % two));

export default () => {
  const one = getrandomNumberforGcd(1, 100);
  const two = getrandomNumberforGcd(1, 100);
  const question = ([one, two].join(' '));

  const answer = (`${getGcdTwoNumber(one, two)}`);
  return [question, answer];
};
