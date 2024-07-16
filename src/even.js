import { getRandomNumber } from './utils.js';

const isEven = (value) => value % 2 === 0;

export default () => {
  const randomNumber = getRandomNumber(1, 100);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [randomNumber, answer];
};
