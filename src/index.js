import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (formulaExpression, condition, checkForDefault) => {
  const Name = getyourName();
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
