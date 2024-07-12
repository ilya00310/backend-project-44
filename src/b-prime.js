import getrandomNumberInRange from './utils.js';

const isPrime = (num) => {
  if (+num === 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return true;
    }
  }
  return false;
};

export default () => {
  const questionAndAnswer = [];
  const question = (getrandomNumberInRange(1, 100));
  const answer = (isPrime(`${questionAndAnswer[0]}`)) ? 'yes' : 'no';
  return [question, answer];
};
