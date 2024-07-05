#!/usr/bin/env node

import allLogic from '../../src/index.js';
import myRandomExpression, { conditionIf } from '../../src/b-c modul.js';

console.log('brain-calc.js\n');

allLogic(myRandomExpression(), 'What is the result of the expression?', conditionIf);
