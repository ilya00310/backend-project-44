#!/usr/bin/env node

import getGeneralLogic from '../../src/index.js';
import getProgression, { getAnswer } from '../../src/b-progression modul.js';

console.log('brain-progression\n');
getGeneralLogic(getProgression, 'What number is missing in the progression?', getAnswer);
