let str ='32 43 12 43 53 64';
let twoNumber = '';
let oneNumber = '';
for (let i = 0; i < str.length; i += 1) {
  if (i !== ' ') {
    twoNumber + str[i];
  } else if (i === ' ') {
    oneNumber = +twoNumber;
    twoNumber = +twoNumber
    console.log(oneNumber,twoNumber)

  }
}
