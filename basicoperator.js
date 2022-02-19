let a =1, b=1;

let c=++a;
let d=b++;
console.log(c,d,d+1,b);

let x = 1+(a*=3);
console.log(a,x);
console.log("  -9  "+5);
console.log(" \t \n"-2);
let A = "1"
let B = "2"
console.log(A+B);
console.log(Number(A)+Number(B));
console.log(+A + +B); //Number 함수의 간단한 형태 +

/*
"" + 1 + 0 =10
"" - 1 + 0 =-1
true + false =1
6 / "3" =2
"2" * "3" =6
4 + 5 + "px" =9px
"$" + 4 + 5 =$45
"4" - 2 =2
"4px" - 2 =nan
7 / 0 =infinity
"  -9  " + 5 =-95 -->wrong
"  -9  " - 5 =-14
null + 1 =1
undefined + 1 =nan
" \t \n" - 2 =? -->wrong \t공백 연산자
*/