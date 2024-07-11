import getrandomNumberInRange from './utils.js';

export default () => {
  const questionAndAnswer = [];
  const one = getrandomNumberInRange(1, 100);
  const two = getrandomNumberInRange(1, 100);
  questionAndAnswer.push([one, two].join(' '));
  const getTwoRandomNumber = (arr) => {
    let onePartArray = arr[0];
    let twoPartArray = arr[1];
    if (onePartArray < twoPartArray) {
      const temporaryStorage = one;
      onePartArray = twoPartArray;
      twoPartArray = temporaryStorage;
    }
    return twoPartArray === 0
      ? onePartArray : getTwoRandomNumber([twoPartArray, onePartArray % twoPartArray]);
  };
  questionAndAnswer.push(`${getTwoRandomNumber([one, two])}`);
  return questionAndAnswer;
};
