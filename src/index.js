import readlineSync from 'readline-sync';
import getyourName from './cli.js';

export default (getQuestionandAnswer, condition) => {
  const Name = getyourName();
  console.log(condition);
  const quantityIteration = 3;
  for (let i = 0; i < quantityIteration; i += 1) {
    const questionAndAnswer = getQuestionandAnswer();
    const [question, answer] = questionAndAnswer;
    const unswerUser = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (unswerUser !== answer) {
      console.log(`${unswerUser} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${Name}!`);
      return;
    }
    console.log('correct!');
  }
  console.log(`Congratulations, ${Name}!`);
};
