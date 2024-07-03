import readlineSync from 'readline-sync';
import yourName from './cli.js';

export default () => {
  const Name = yourName();
  console.log('\nAnswer "yes" if the number is even, otherwise answer "no".');

  const randomFromOneHundred = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = randomFromOneHundred();
    const question = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
    if (question === 'yes' && randomNumber % 2 === 0) {
      console.log('Correct!');
    } else if (question === 'no' && randomNumber % 2 === 0) {
      console.log(`${question} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again,${Name}`);
      return;
    } else if (question === 'no' && randomNumber % 2 !== 0) {
      console.log('Correct!');
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${Name}!`);
      return;
    }
  }
  console.log(`Congratulations,${Name}`);
};
