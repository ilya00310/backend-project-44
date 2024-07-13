import getrandomOptionsForProgression from './utils.js';

const calculateValueTwoDots = (str) => {
  let smallerNumber;
  let largerNumber;
  for (let i = 0; i < str.length; i += 1) {
    if (str[0] === '..') {
      smallerNumber = +str[1];
      largerNumber = +str[2];
      return smallerNumber - (largerNumber - smallerNumber);
    } if (str[str.length - 1] === '..') {
      smallerNumber = +str[str.length - 3];
      largerNumber = +str[str.length - 2];
      return largerNumber + (largerNumber - smallerNumber);
    } if (str[i + 1] === '..') {
      smallerNumber = +str[i];
    } if (str[i - 1] === '..') {
      largerNumber = +str[i];
      return smallerNumber + (largerNumber - smallerNumber) / 2;
    }
  }
  return false;
};
const formProgression = (lengthOfProgression, indicateSkipAndInterval) => {
  const progression = [];
  let oneNumber = getrandomOptionsForProgression(1, 100);
  for (let i = 0; i < lengthOfProgression; i += 1) {
    if (i === indicateSkipAndInterval) {
      oneNumber += indicateSkipAndInterval;
      progression.push('..');
    } else {
      oneNumber += indicateSkipAndInterval;
      progression.push(oneNumber);
    }
  }
  return progression;
};

export default () => {
  const lengthOfProgression = getrandomOptionsForProgression(5, 10);
  const indicateSkipAndInterval = getrandomOptionsForProgression(1, lengthOfProgression) - 1;
  const progression = (formProgression(lengthOfProgression, indicateSkipAndInterval));
  const question = progression.join(' ');
  const answer = (String(calculateValueTwoDots(progression)));
  return [question, answer];
};
