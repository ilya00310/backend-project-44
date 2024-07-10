import getrandomNumberInRange from './utils.js';

export default () => {
  const getrandomExpression = () => {
    const one = getrandomNumberInRange(1, 100);
    const two = getrandomNumberInRange(1, 100);
    const sign = getrandomNumberInRange(1, 3);
    if (sign === 1) {
      return `${one} + ${two}`;
    } if (sign === 2) {
      return `${one} - ${two}`;
    } if (sign === 3) {
      return `${one} * ${two}`;
    }
    return false;
  };
  return getrandomExpression;
};

export const сheckCondition = (userResponse, name, numberExpression) => {
  const getAnswerExpression = (str) => {
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
  const answer = getAnswerExpression(numberExpression);
  if (answer === +userResponse) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    return false;
  }
  return сheckCondition;
};
