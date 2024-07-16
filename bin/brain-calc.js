#!/usr/bin/env node

import getGeneralLogic from '../src/index.js';
import getRandomExpression from '../src/clac.js';

getGeneralLogic(getRandomExpression, 'What is the result of the expression?');
