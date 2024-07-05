const a = '100 52';
let one;
let two;
let sol;
for (let i = 0; i < a.length; i += 1) {
  if (a[i] === ' ') {
    if (+a.slice(0, i) > +a.slice(i + 1, a.length)) {
      one = +a.slice(i + 1, a.length);
      two = +a.slice(0, i);
    } else {
      one = +a.slice(0, i);
      two = +a.slice(i + 1, a.length);
    }
    break;
  }
}
for (let i = one; i > 0; i -= 1){
    if (one % i === 0 && two % i === 0){
         sol = i
         break;
    }
}
console.log(one, two, sol);
