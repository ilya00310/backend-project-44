import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (useFormulaExpression, condition) => {
  const Name = getyourName();
  console.log(condition);
  let question;
  for (let i = 0; i < 3; i += 1) {
    const expressionAndAnswer = useFormulaExpression();
    const [expression, answer] = expressionAndAnswer;
    question = readlineSync.question(`Question: ${expression} \nYour answer: `);
    if (question !== answer) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${Name}!`);
      return;
    }
    console.log('correct!');
  }
  console.log(`Congratulations, ${Name}!`);
};
