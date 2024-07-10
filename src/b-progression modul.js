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
      progression.push('..');
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
    for (let i = 0; i < str.length; i += 1) {
      if (str[0] === '..') {
        one = +str[1];
        two = +str[2];
        return one - (two - one);
      } if (str[str.length - 1] === '..') {
        one = +str[str.length - 3];
        two = +str[str.length - 2];
        return two + (two - one);
      } if (str[i + 1] === '..') {
        one = +str[i];
      } if (str[i - 1] === '..') {
        two = +str[i];
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
