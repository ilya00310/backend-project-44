#!/usr/bin/env node

import getGeneralLogic from '../../src/index.js';
import getTwoRandomNumber, { сheckCondition } from '../../src/b-gcd modul.js';

console.log('brain-gcd\n');
getGeneralLogic(getTwoRandomNumber, 'Find the greatest common divisor of given numbers.', сheckCondition);
