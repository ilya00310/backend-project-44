import getrandomNumberInRange, { reactOnCorrectAnswer, reactOnWrongAnswer } from './utils.js';

export default () => getrandomNumberInRange(1, 100);
export const сheckCondition = (userResponse, name, number) => {
  const isEven = number % 2 === 0;
  const expectedAnswer = isEven ? 'yes' : 'no';
  console.log(userResponse, expectedAnswer, isEven, number);
  if (userResponse === expectedAnswer) {
    return reactOnCorrectAnswer();
  }

  reactOnWrongAnswer(userResponse, expectedAnswer, name);
  return false;
};
