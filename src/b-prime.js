import getrandomNumberInRange from './utils.js';

export default () => {
  const questionAndAnswer = [];
  questionAndAnswer.push(getrandomNumberInRange(1, 100));
  const checkNumber = (str) => {
    if (+str === 1) {
      return 'no';
    }
    let score = 0;
    for (let i = +str; i > 0; i -= 1) {
      if (str % i === 0) {
        score += 1;
      }
      if (score > 2) {
        return 'no';
      }
    }
    return 'yes';
  };
  questionAndAnswer.push(checkNumber(`${questionAndAnswer[0]}`));
  return questionAndAnswer;
};
