import readlineSync from 'readline-sync';
import yourName from './cli.js';

export default (formulaExpression, correctAnswer, condition) => {
  const Name = yourName();
  console.log(condition);

  for (let i = 0; i < 3; i += 1) {
    const expression = formulaExpression();
    const checkCorrect = correctAnswer(expression); 
    const question = readlineSync.question(`Question: ${expression}\nYour answer: `);
    console.log(checkCorrect);
    if (question === 'yes' && checkCorrect === true) {
      console.log('Correct!');
    } else if (question === 'no' && checkCorrect === true) {
      console.log(`${question} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again,${Name}`);
      return;
    } else if (question === 'no' && checkCorrect === false) {
      console.log('Correct!');
    } else {
      console.log(`${question} is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${Name}!`);
      return;
    }
  }
  console.log(`Congratulations,${Name}`);
};
