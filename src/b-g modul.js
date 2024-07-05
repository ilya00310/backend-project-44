export default () => {
  const one = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const two = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return `${one} ${two}`;
};
export const getAnswer = (userResponse, name, numberExpression) => {
  const randomExpressionAnswer = (str) => {
    let one;
    let two;
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] === ' ') {
        if (+str.slice(0, i) > +str.slice(i + 1, str.length)) {
          one = +str.slice(i + 1, str.length);
          two = +str.slice(0, i);
        } else {
          one = +str.slice(0, i);
          two = +str.slice(i + 1, str.length);
        }
        break;
      }
    }
    for (let i = one; i > 0; i -= 1) {
      if (one % i === 0 && two % i === 0) {
        return i;
      }
    }
  };
  const answer = randomExpressionAnswer(numberExpression);
  if (+userResponse === answer) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again,${name}`);
    return false;
  }
  return getAnswer;
};
