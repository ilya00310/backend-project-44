import getrandomNumberInRange, { reactOnCorrectAnswer, reactOnWrongAnswer } from './utils.js';

export default () => {
  const lengthOfProgression = getrandomNumberInRange(5, 10);
  const indicateSkip = getrandomNumberInRange(1, lengthOfProgression) - 1;
  const intervalPass = getrandomNumberInRange(10, 6);
  const progression = [];
  let initalNumber = getrandomNumberInRange(1, 100);

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indicateSkip) {
      initalNumber += intervalPass;
      progression.push('..');
    } else {
      initalNumber += intervalPass;
      progression.push(initalNumber);
    }
  }

  return progression;
};
export const getAnswer = (userResponse, name, numberExpression) => {
  const calculateValueTwoDots = (str) => {
    let smallerNumber;
    let largerNumber;
    for (let i = 0; i < str.length; i += 1) {
      if (str[0] === '..') {
        smallerNumber = +str[1];
        largerNumber = +str[2];
        return smallerNumber - (largerNumber - smallerNumber);
      } if (str[str.length - 1] === '..') {
        smallerNumber = +str[str.length - 3];
        largerNumber = +str[str.length - 2];
        return largerNumber + (largerNumber - smallerNumber);
      } if (str[i + 1] === '..') {
        smallerNumber = +str[i];
      } if (str[i - 1] === '..') {
        largerNumber = +str[i];
        return smallerNumber + (largerNumber - smallerNumber) / 2;
      }
    }
    return false;
  };
  const answer = calculateValueTwoDots(numberExpression);
  if (+userResponse === answer) {
    console.log('Corrct!');
  } else {
    reactOnWrongAnswer(userResponse, answer, name);
    return false;
  }
  return getAnswer;
};
