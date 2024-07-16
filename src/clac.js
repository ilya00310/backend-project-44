import getrandomOperand from './utils.js';

const getAnswer = (one, two, operator) => {
  let answer;
  if (operator === '+') {
    answer = (`${one + two}`);
  } if (operator === '-') {
    answer = (`${one - two}`);
  } if (operator === '*') {
    answer = (`${one * two}`);
  }
  return answer;
};

export default () => {
  const one = getrandomOperand(1, 100);
  const two = getrandomOperand(1, 100);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getrandomOperand(0, 2)];
  return [`${one} ${randomOperator} ${two}`, getAnswer(one, two, randomOperator)];
};
