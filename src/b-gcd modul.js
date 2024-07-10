import getrandomNumberInRange from './utils.js';

export default () => {
  const one = getrandomNumberInRange(1, 100);
  const two = getrandomNumberInRange(1, 100);
  const bothNumber = [one, two];
  return bothNumber;
};
export const сheckCondition = (userResponse, name, numberExpression) => {
  const getTwoRandomNumber = (str) => {
    let one = str[0];
    let two = str[1];
    if (one < two) {
      const temporaryStorage = one;
      one = two;
      two = temporaryStorage;
    }
    return two === 0 ? one : getTwoRandomNumber([two, one % two]);
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
