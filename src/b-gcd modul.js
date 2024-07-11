import getrandomNumberInRange, { reactOnCorrectAnswer, reactOnWrongAnswer } from './utils.js';

export default () => {
  const one = getrandomNumberInRange(1, 100);
  const two = getrandomNumberInRange(1, 100);
  const bothNumber = [one, two];
  return bothNumber;
};
export const сheckCondition = (userResponse, name, numberExpression) => {
  const getTwoRandomNumber = (str) => {
    let one = str[0];
    let two = str[1];
    if (one < two) {
      const temporaryStorage = one;
      one = two;
      two = temporaryStorage;
    }
    return two === 0 ? one : getTwoRandomNumber([two, one % two]);
  };
  const answer = getTwoRandomNumber(numberExpression);
  if (+userResponse === answer) {
    reactOnCorrectAnswer();
  } else {
    reactOnWrongAnswer(userResponse, answer, name);
    return false;
  }
  return сheckCondition;
};
