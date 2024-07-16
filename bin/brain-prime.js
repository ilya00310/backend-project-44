#!/usr/bin/env node

import getGeneralLogic from '../src/index.js';
import getNumber from '../src/prime.js';

getGeneralLogic(getNumber, 'Answer "yes" if given number is prime. Otherwise answer "no"');
