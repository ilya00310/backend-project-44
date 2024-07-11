import getrandomNumberInRange from './utils.js';

export default () => {
  const questionAndAnswer = [];
  questionAndAnswer.push(getrandomNumberInRange(1, 100));
  const isEven = questionAndAnswer[0] % 2 === 0;
  questionAndAnswer.push(isEven ? 'yes' : 'no');
  return questionAndAnswer;
};
