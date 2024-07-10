import getrandomNumberInRange from './utils.js';

export default () => {
  const lengthOfProgression = getrandomNumberInRange(5, 10);
  const indicateSkip = getrandomNumberInRange(1, lengthOfProgression) - 1;
  const intervalPass = getrandomNumberInRange(10, 6);
  const progression = [];
  let initalNumber = getrandomNumberInRange(1, 100);

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indicateSkip) {
      initalNumber += intervalPass;
      progression.push('.. ');
    } else {
      initalNumber += intervalPass;
      progression.push(initalNumber);
    }
  }

  return progression;
};
export const getAnswer = (userResponse, name, numberExpression) => {
  const answerProgression = (str) => {
    let one;
    let two;
    const strSplit = str.split(' ');
    for (let i = 0; i < str.length; i += 1) {
      if (strSplit[0] === '..') {
        one = +strSplit[1];
        two = +strSplit[2];
        return one - (two - one);
      } if (strSplit[strSplit.length - 2] === '..') {
        one = +strSplit[strSplit.length - 4];
        two = +strSplit[strSplit.length - 3];
        return two + (two - one);
      } if (strSplit[i + 1] === '..') {
        one = +strSplit[i];
      } if (strSplit[i - 1] === '..') {
        two = +strSplit[i];
        return one + (two - one) / 2;
      }
    }
    return false;
  };
  const answer = answerProgression(numberExpression);
  if (+userResponse === answer) {
    console.log('Corrct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    return false;
  }
  return getAnswer;
};
