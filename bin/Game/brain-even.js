#!/usr/bin/env node

import allLogic from '../../src/index.js';
import myRandomFromOneHundred, { myConditionIf } from '../../src/b-e modul.js';

console.log('brain-even\n');
allLogic(myRandomFromOneHundred, 'Answer "yes" if the number is even, otherwise answer "no".', myConditionIf);
