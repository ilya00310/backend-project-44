#!/usr/bin/env node
import getGeneralLogic from '../src/index.js';
import getTwoRandomNumber from '../src/gcd.js';

getGeneralLogic(getTwoRandomNumber, 'Find the greatest common divisor of given numbers.');
