import getRandomNumber from './utils.js';

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
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = ['+', '-', '*'];
  const randomOperator = operator[getRandomNumber(0, 2)];
  return [`${firstOperand} ${randomOperator} ${secondOperand}`, getAnswer(firstOperand, secondOperand, randomOperator)];
};
