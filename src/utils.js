export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const reactOnCorrectAnswer = () => console.log('correct!');
export const reactOnWrongAnswer = (userResponse, answer, name) => {
  console.log(`${userResponse} is wrong answer ;(. Correct answer was ${answer}.\nLet's try again, ${name}!`);
};
