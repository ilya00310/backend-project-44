import allLogic from './allLogic.js';

const randomFromOneHundred = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const checkCondition = (x) => x % 2 === 0; 
allLogic(randomFromOneHundred,checkCondition, '\nAnswer "yes" if the number is even, otherwise answer "no".');
