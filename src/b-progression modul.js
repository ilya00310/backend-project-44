export default () => {
  const lengthOfProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const indicateSkip = Math.floor(Math.random() * (lengthOfProgression - 1 + 1)) + 1;
  const intervalPass = Math.floor(Math.random() * (10 - 6 + 1)) + 6;
  let progression = '';
  let initalNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indicateSkip - 1) {
      initalNumber += intervalPass;
      progression += ' ..';
    } else {
      initalNumber += intervalPass;
      progression += ` ${initalNumber}`;
    }
  }
  return progression;
};
export const getAnswer = (userResponse, name, numberExpression) => {
  const answerProgression = (str) => {
    let one;
    let two;
    const strSplit = str.split(' ');
    for (let i = 0; i < str.length; i += 1) {
      if (strSplit[1] === '..') {
        one = +strSplit[2];
        two = +strSplit[3];
        return one - (two - one);
      } if (strSplit[strSplit.length - 1] === '..') {
        one = +strSplit[strSplit.length - 3];
        two = +strSplit[strSplit.length - 2];
        return two + (two - one);
      } if (strSplit[i + 1] === '..') {
        one = +strSplit[i];
      } else if (strSplit[i - 1] === '..') {
        two = +strSplit[i];
        return one + (two - one) / 2;
      }
    }
    return false;
  };
  const answer = answerProgression(numberExpression);
  if (+userResponse === answer) {
    console.log('Corrct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
    return false;
  }
  return getAnswer;
};
