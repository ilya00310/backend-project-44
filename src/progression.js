import { getRandomNumber } from './utils.js';

const calculatehideNumber = (hideNum, step, oneNumber) => oneNumber + step * hideNum;

const formProgression = (one, stepSequenc) => {
  const progression = [one];
  let oneStep = one;
  for (let i = 0; i <= 10; i += 1) {
    oneStep += stepSequenc;
    progression.push(oneStep);
  }
  return progression;
};

export default () => {
  const firstNumberProg = getRandomNumber(1, 100);
  const stepSequencProg = getRandomNumber(1, 10);
  const progression = formProgression(firstNumberProg, stepSequencProg);
  const numberForHideProgr = getRandomNumber(0, 9);
  progression[numberForHideProgr] = '..';
  const question = progression.join(' ');
  const answer = String(calculatehideNumber(numberForHideProgr, stepSequencProg, firstNumberProg));
  return [question, answer];
};
