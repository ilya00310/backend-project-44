#!/usr/bin/env node

import getGeneralLogic from '../../src/index.js';
import getNumber from '../../src/b-prime.js';

console.log('brain-prime\n');
getGeneralLogic(getNumber, 'Answer "yes" if given number is prime. Otherwise answer "no"');
