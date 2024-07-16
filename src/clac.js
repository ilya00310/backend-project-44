import getrandomOperand from './utils.js';

const getAnswer = (one, two, numberForDefinitionSign) => {
  let answer;
  if (numberForDefinitionSign === 1) {
    answer = (`${one + two}`);
  } if (numberForDefinitionSign === 2) {
    answer = (`${one - two}`);
  } if (numberForDefinitionSign === 3) {
    answer = (`${one + two}`);
  }
  return answer;
};

const getExpression = (one, two, numberForDefinitionSign) => {
  let expression;
  if (numberForDefinitionSign === 1) {
    expression = (`${one} + ${two}`);
  } if (numberForDefinitionSign === 2) {
    expression = (`${one} - ${two}`);
  } if (numberForDefinitionSign === 3) {
    expression = (`${one} * ${two}`);
  }
  return expression;
};
export default () => {
  const one = getrandomOperand(1, 100);
  const two = getrandomOperand(1, 100);
  const numberForDefinitionSign = getrandomOperand(1, 3);
  const expression = getExpression(one, two, numberForDefinitionSign);
  return [expression, getAnswer(one, two, numberForDefinitionSign)];
};
