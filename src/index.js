import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (formulaExpression, condition, checkForDefault,getAnswerExpression) => {
  const Name = getyourName();
  console.log(condition);
  let question;
  for (let i = 0; i < 3; i += 1) {
    const expression = formulaExpression();
    const answer = getAnswerExpression(formulaExpression);
    console.log(answer, checkForDefault);
    if (Array.isArray(expression)) {
      console.log(typeof (expression.join(' ')));
      question = readlineSync.question(`Question: ${expression.join(' ')} \nYour answer: `);
    } else {
      question = readlineSync.question(`Question: ${expression} \nYour answer: `);
    }
    if (checkForDefault(question, Name, expression) === false) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${Name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${Name}!`);
};
