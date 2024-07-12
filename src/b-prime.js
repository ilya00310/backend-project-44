import getrandomNumberInRange from './utils.js';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const question = (getrandomNumberInRange(1, 100));
  const answer = (isPrime(`${question}`)) ? 'yes' : 'no';
  return [question, answer];
};
