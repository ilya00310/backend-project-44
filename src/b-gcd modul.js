import getrandomNumberInRange from './utils.js';

export default () => {
  const one = getrandomNumberInRange(1, 100);
  const two = getrandomNumberInRange(1, 100);
  return `${one} ${two}`;
};
export const сheckCondition = (userResponse, name, numberExpression) => {
  const getTwoRandomNumber = (str) => {
    let one;
    let two;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === ' ') {
        if (+str.slice(0, i) > +str.slice(i + 1, str.length)) {
          one = +str.slice(i + 1, str.length);
          two = +str.slice(0, i);
        } else {
          one = +str.slice(0, i);
          two = +str.slice(i + 1, str.length);
        }
        break;
      }
    }
    for (let i = one; i > 0; i -= 1) {
      if (one % i === 0 && two % i === 0) {
        return i;
      }
    }
    return false;
  };
  const answer = getTwoRandomNumber(numberExpression);
  if (+userResponse === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    return false;
  }
  return сheckCondition;
};
