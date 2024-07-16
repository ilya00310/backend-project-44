import getrandomNumberInRange from './utils.js';

const isEven = (value) => value % 2 === 0;

export default () => {
  const question = (getrandomNumberInRange(1, 100));
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};
