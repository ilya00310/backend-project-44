import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (getQuestionandAnswer, condition) => {
  const Name = getyourName();
  console.log(condition);
  const iterationsCount = 3;
  for (let i = 0; i < iterationsCount; i += 1) {
    const [question, answer] = getQuestionandAnswer();
    const answerUser = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (answerUser !== answer) {
      console.log(`${answerUser} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${Name}!`);
      return;
    }
    console.log('correct!');
  }
  console.log(`Congratulations, ${Name}!`);
};
