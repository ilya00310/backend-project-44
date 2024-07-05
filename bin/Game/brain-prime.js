#!/usr/bin/env node

import allLogic from '../../src/index.js';
import getTwoNumber, { getAnswer } from '../../src/b-prime.js';

console.log('brain-prime\n');
allLogic(getTwoNumber, 'Answer "yes" if given number is prime. Otherwise answer "no"', getAnswer);
