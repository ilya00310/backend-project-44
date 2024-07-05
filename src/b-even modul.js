export default () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
export const myConditionIf = (userResponse, name, number) => {
  if (userResponse === 'yes' && number % 2 === 0) {
    console.log('Correct!');
  } else if (userResponse === 'no' && number % 2 === 0) {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again,${name}`);
    return false;
  } else if (userResponse === 'no' && number % 2 !== 0) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${name}!`);
    return false;
  }
  return false;
};
