export default () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
export const myConditionIf = (userResponse, name, number) => {
  if (userResponse === 'yes' && number % 2 === 0) {
    return console.log('Correct!');
  }
  if (userResponse === 'no' && number % 2 !== 0) {
    return console.log('Correct!');
  }
  console.log(`${userResponse} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
  return false;
};
