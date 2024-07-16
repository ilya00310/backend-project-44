#!/usr/bin/env node

import getGeneralLogic from '../src/index.js';
import getRandomNumber from '../src/even.js';

getGeneralLogic(getRandomNumber, 'Answer "yes" if the number is even, otherwise answer "no".');
