import getrandomNumberInRange from './utils.js';

const isEven = (value) => value % 2 === 0;

export default () => {
  const question = (getrandomNumberInRange(1, 100));
  const evenOrNot = isEven(question[0]);
  const answer = (evenOrNot ? 'yes' : 'no');
  return [question, answer];
};
