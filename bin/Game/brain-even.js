#!/usr/bin/env node

import allLogic from '../../src/allLogic.js';

console.log('brain-even\n');
const randomFromOneHundred = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const checkCondition = (x) => x % 2 === 0;
const conditionIf = (userResponse,name, number) => {
  if (userResponse === 'yes' && number % 2 === 0) {
    console.log('Correct!');
  } else if (userResponse === 'no' && number % 2 === 0) {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again,${name}`);
    return false
} else if (userResponse === 'no' && number % 2 !== 0 ) {
    console.log('Correct!');
  } else {
    console.log(`${userResponse} is wrong answer ;(. Correct answer was 'no'.\nLet's try again,${name}!`);
    return false
}
};

allLogic(randomFromOneHundred, 'Answer "yes" if the number is even, otherwise answer "no".', conditionIf);
 