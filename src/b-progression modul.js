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
  let differenceWithoutNumbers;
  let quantitySign;
  const oneNumber = '';
  const twoNumber = '';
  const answerProgression = (str) => {
    for (let i = 0; i < str.length; i += 1) {
      if (i !== ' ') {
        twoNumber ='';
        twoNumber + str[i];
      } else if (i === ' ') {
        oneNumber = +twoNumber;
        twoNumber = +twoNumber

      }
      if (str[i + 1] === '...') {

      }
    }
  };
};
