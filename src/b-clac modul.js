import getrandomOperand from './utils.js';

const getAnswer = (str) => {
  let answer;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i - 1] === ' ' && str[i + 1] === ' ') {
      const oneNumber = +str.slice(0, i - 1);
      const twoNumber = +str.slice(i + 1, str.length);
      if (str[i] === '*') {
        answer = (`${oneNumber * twoNumber}`);
      } if (str[i] === '+') {
        answer = (`${oneNumber + twoNumber}`);
      } if (str[i] === '-') {
        answer = (`${oneNumber - twoNumber}`);
      }
    }
  }
  return answer;
};

const getOperator = (one, two, sign) => {
  let question;
  if (sign === 1) {
    question = (`${one} + ${two}`);
  } if (sign === 2) {
    question = (`${one} - ${two}`);
  } if (sign === 3) {
    question = (`${one} * ${two}`);
  }
  return question;
};
export default () => {
  const one = getrandomOperand(1, 100);
  const two = getrandomOperand(1, 100);
  const sign = getrandomOperand(1, 3);
  const question = getOperator(one, two, sign);
  return [question, getAnswer(question)];
};
