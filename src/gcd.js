import { getRandomNumber } from './utils.js';

const getGcdTwoNumber = (one, two) => (two === 0
  ? one : getGcdTwoNumber(two, one % two));

export default () => {
  const oneRandomNumber = getRandomNumber(1, 100);
  const twoRandomNumber = getRandomNumber(1, 100);
  const question = `${oneRandomNumber} ${twoRandomNumber}`;
  const answer = String(getGcdTwoNumber(oneRandomNumber, twoRandomNumber));
  return [question, answer];
};
