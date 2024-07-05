export default () => {
  const randomExpression = () => {
    const one = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const two = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const sign = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (sign === 1) {
      return `${one} + ${two}`;
    } if (sign === 2) {
      return `${one} - ${two}`;
    } if (sign === 3) {
      return `${one} * ${two}`;
    }
    return false;
  };
  return randomExpression;
};

export const conditionIf = (userResponse, name, numberExpression) => {
  const randomExpressionAnswer = (str) => {
    for (let i = 0; i < str.length; i += 1) {
      if (str[i - 1] === ' ' && str[i + 1] === ' ') {
        const one = +str.slice(0, i - 1);
        const two = +str.slice(i + 1, str.length);
        if (str[i] === '*') {
          return one * two;
        } if (str[i] === '+') {
          return one + two;
        } if (str[i] === '-') {
          return one - two;
        }
      }
    }
    return false;
  };
  const answer = randomExpressionAnswer(numberExpression);
  if (answer === +userResponse) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again,${name}`);
    return false;
  }
  return conditionIf;
};
