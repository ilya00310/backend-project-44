#!/usr/bin/env node

import allLogic from '../src/allLogic.js';

console.log('brain-calc.js\n');

const randomExpression = () => {
  const one = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const two = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  const sign = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  if (sign === 1) {
    return `${one} + ${two}`;
  } if (sign === 2) {
    return `${one} - ${two}`;
  } if (sign === 3) {
    return `${one} * ${two}`;
  }
};

const randomExpressionAnswer = (a) => {
  for (let i = 0; i < a.length; i += 1) {
    if (a[i - 1] === ' ' && a[i + 1] === ' ') {
      const one = +a.slice(0, i - 1);
      const two = +a.slice(i + 1, a.length);
      console.log(one, two, typeof(one), typeof(two))
      if (a[i] === '*') {
        return one * two;
      } if (a[i] === '+') {
        return one + two;
      } if (a[i] === '-') {
        return one - two;
      }
    }
  }
};
// console.log(randomExpressionAnswer('87 * 9'))
allLogic(randomExpression, randomExpressionAnswer, 'What is the result of the expression?');
