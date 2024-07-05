import readlineSync from 'readline-sync';
import yourName from './cli.js';

export default (formulaExpression, condition, checkForDefault) => {
  const Name = yourName();
  console.log(condition);

  for (let i = 0; i < 3; i += 1) {
    const expression = formulaExpression();
    const question = readlineSync.question(`Question: ${expression}\nYour answer: `);
    if (checkForDefault(question, Name, expression) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${Name}!`);
};
