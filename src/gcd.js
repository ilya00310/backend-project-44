import getRandomNumber from './utils.js';

const getGcdTwoNumber = (one, two) => (two === 0
  ? one : getGcdTwoNumber(two, one % two));

export default () => {
  const oneRundomNumber = getRandomNumber(1, 100);
  const twoRundomNumber = getRandomNumber(1, 100);
  const question = `${oneRundomNumber} ${twoRundomNumber}`;
  const answer = String(getGcdTwoNumber(oneRundomNumber, twoRundomNumber));
  return [question, answer];
};
