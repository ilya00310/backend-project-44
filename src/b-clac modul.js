import getrandomNumberInRange from './utils.js';

export default () => {
  const questionAndAnswer = [];
  let one = getrandomNumberInRange(1, 100);
  let two = getrandomNumberInRange(1, 100);
  const sign = getrandomNumberInRange(1, 3);
  if (sign === 1) {
    questionAndAnswer.push(`${one} + ${two}`);
  } if (sign === 2) {
    questionAndAnswer.push(`${one} - ${two}`);
  } if (sign === 3) {
    questionAndAnswer.push(`${one} * ${two}`);
  }
  for (let i = 0; i < questionAndAnswer[0].length; i += 1) {
    if (questionAndAnswer[0][i - 1] === ' ' && questionAndAnswer[0][i + 1] === ' ') {
      one = +questionAndAnswer[0].slice(0, i - 1);
      two = +questionAndAnswer[0].slice(i + 1, questionAndAnswer[0].length);
      if (questionAndAnswer[0][i] === '*') {
        questionAndAnswer.push(`${one * two}`);
      } if (questionAndAnswer[0][i] === '+') {
        questionAndAnswer.push(`${one + two}`);
      } if (questionAndAnswer[0][i] === '-') {
        questionAndAnswer.push(`${one - two}`);
      }
    }
  }
  return questionAndAnswer;
};

