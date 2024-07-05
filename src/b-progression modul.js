export default () => {
  const lengthOfProgression = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  const indicateSkip = Math.floor(Math.random() * (lengthOfProgression - 1 + 1)) + 1;
  const intervalPass = Math.floor(Math.random() * (10 - 5 + 1)) + 5;
  let progression = '';
  let initalNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indicateSkip - 1) {
      initalNumber += intervalPass;
      progression += ' ...';
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
    str = str.split(' ');
    for (let i = 0; i < str.length; i += 1) {
      if (str[1] === '...') {
        one = +str[2];
        two = +str[3];
        return one - (two - one) ;
      } if (str[str.length - 1] === '...') {
        one = +str[str.length - 3];
        two = +str[str.length - 2];
        return two + (two - one);
      } if (str[i + 1] === '...') {
        one = +str[i];
      } else if (str[i - 1] === '...') {
        two = +str[i];
        return one + (two - one) / 2;
      }
    }
  
  };
  const answer = answerProgression(numberExpression);
  if (+userResponse === answer) {
    console.log('Corrct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again,${name}`);
    return false;
  }
  return getAnswer;
};
