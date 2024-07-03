import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
