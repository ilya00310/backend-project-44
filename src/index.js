import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (formulaExpression, condition, checkForDefault) => {
  const Name = getyourName();
  console.log(condition);
  let question;
  for (let i = 0; i < 3; i += 1) {
    const expression = formulaExpression();
    console.log(expression);
    if (Array.isArray(expression)) {
      question = readlineSync.question(`Question: ${expression[0]} ${expression[1]}\nYour answer: `);
    } else {
      question = readlineSync.question(`Question: ${expression} \nYour answer: `);
    }
    if (checkForDefault(question, Name, expression) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${Name}!`);
};
