import readlineSync from 'readline-sync';

export default () => {
console.log ('Answer "yes" if the number is even, otherwise answer "no".');
const random = (min,max) => {
    min = 1;
    max = 100;
    return Math.floor(Math.random()*(100 - 1 + 1)) + min;
}

for (let i = 0; i < 3; i += 1){
    const randomNumber = random();
let question = readlineSync.question(`Question: ${randomNumber}\nYour answer: ` );
if (question === 'yes' && randomNumber % 2 === 0 || question === 'no' && randomNumber % 2 != 0){
    console.log('Correct!')
}else{ 
(console.log("'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!"));
break;
}
console.log('Congratulations, Sam!');
}
}
