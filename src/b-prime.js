import getrandomNumberInRange, { reactOnCorrectAnswer, reactOnWrongAnswer } from './utils.js';

export default () => getrandomNumberInRange(1, 100);
export const сheckCondition = (userResponse, name, numberExpression) => {
  const checkNumber = (str) => {
    if (+str === 1) {
      return 'no';
    }
    let score = 0;
    for (let i = +str; i > 0; i -= 1) {
      if (str % i === 0) {
        score += 1;
      }
      if (score > 2) {
        return 'no';
      }
    }
    return 'yes';
  };
  const answer = checkNumber(numberExpression);
  if (userResponse === answer) {
    reactOnCorrectAnswer();
  } else {
    reactOnWrongAnswer(userResponse, answer, name);
    return false;
  }
  return сheckCondition;
};
