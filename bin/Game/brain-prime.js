#!/usr/bin/env node

import allLogic from '../../src/index.js';
import getNumber, { getAnswer } from '../../src/b-prime.js';

console.log('brain-prime\n');
allLogic(getNumber, 'Answer "yes" if given number is prime. Otherwise answer "no"', getAnswer);
