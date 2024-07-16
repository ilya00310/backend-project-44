import getrandomOperand from './utils.js';

const getAnswer = (one, two, operator) => {
  switch (operator) {
    case '+':
      return (`${one + two}`);
    case '-':
      return (`${one - two}`);
    case '*':
      return (`${one * two}`);
    default: throw new Error();
  }
};
export default () => {
  const one = getrandomOperand(1, 100);
  const two = getrandomOperand(1, 100);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getrandomOperand(0, 2)];
  return [`${one} ${randomOperator} ${two}`, getAnswer(one, two, randomOperator)];
};
