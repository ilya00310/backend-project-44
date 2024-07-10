#!/usr/bin/env node

import getGeneralLogic from '../../src/index.js';
import getRandomNumber, { сheckCondition } from '../../src/b-even modul.js';

console.log('brain-even\n');
getGeneralLogic(getRandomNumber, 'Answer "yes" if the number is even, otherwise answer "no".', сheckCondition);
