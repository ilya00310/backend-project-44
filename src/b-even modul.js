import getrandomNumberInRange from './utils.js';

export default () => getrandomNumberInRange(1, 100);
export const сheckCondition = (userResponse, name, number) => {
  if (userResponse === 'yes' && number % 2 === 0) {
    return console.log('Correct!');
  }
  if (userResponse === 'no' && number % 2 !== 0) {
    return console.log('Correct!');
  }
  console.log(`${userResponse} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  return false;
};
