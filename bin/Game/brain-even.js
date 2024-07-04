#!/usr/bin/env node

import allLogic from '../../src/allLogic.js';

console.log('brain-even\n');
const randomFromOneHundred = () => Math.floor(Math.random() * (100 - 1 + 1)) + 1;
const checkCondition = (x) => x % 2 === 0; 
allLogic(randomFromOneHundred,checkCondition, 'Answer "yes" if the number is even, otherwise answer "no".');
