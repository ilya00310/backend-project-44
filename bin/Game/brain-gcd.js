#!/usr/bin/env node

import allLogic from '../../src/index.js';
import getTwoNumber, { getAnswer } from '../../src/b-g modul.js';

console.log('brain-gcd\n');
allLogic(getTwoNumber, 'Find the greatest common divisor of given numbers.', getAnswer);
