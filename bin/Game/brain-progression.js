#!/usr/bin/env node

import getGeneralLogic from '../../src/index.js';
import getProgression, { getAnswer } from '../../src/b-progression modul.js';

getGeneralLogic(getProgression, 'What number is missing in the progression?', getAnswer);
