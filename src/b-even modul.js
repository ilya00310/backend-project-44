import getrandomNumberInRange from './utils.js';

export default () => getrandomNumberInRange(1, 100);
export const сheckCondition = (userResponse, name, number) => {
  const isEven = number % 2 === 0;
  const expectedAnswer = isEven ? 'yes' : 'no';
  console.log(userResponse, expectedAnswer, isEven, number);
  if (userResponse === expectedAnswer) {
    return console.log('Correct!');
  }

  console.log(`${userResponse} is wrong answer ;(. Correct answer was no.\nLet's try again, ${name}!`);
  return false;
};