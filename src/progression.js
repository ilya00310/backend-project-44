import getrandomOptionsForProgression from './utils.js';

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
  const oneNumber = getrandomOptionsForProgression(1, 100);
  const stepSequenc = getrandomOptionsForProgression(1, 10);
  const progression = formProgression(oneNumber, stepSequenc);
  const numberForHide = getrandomOptionsForProgression(0, 9);
  progression[numberForHide] = '..';
  const question = progression.join(' ');
  const answer = (String(calculatehideNumber(numberForHide, stepSequenc, oneNumber)));
  return [question, answer];
};
