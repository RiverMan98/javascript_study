let a = 5>4;
let b = "apple" > "pineapple";
let c = "2">"12";
let d = undefined == null;
let e = undefined === null;
let f = null == "\n0\n";
let g = null === +"\n0\n";

console.log(a===true);
console.log(b===true);  // wrong  --> 사전에서 먼저 나오면 작은 것
console.log(c===false);  //wrong  --> 문자열 숫자 비교는 첫번째 숫자 하나씩 비교
console.log(d===true);
console.log(e===false);
console.log(f===false);
console.log(g===false);