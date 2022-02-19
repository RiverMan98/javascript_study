let admin, name;
name = "Riverman";
admin = name;
console.log(admin);  //alert 함수 nodejs에 없음?
let ourPlanet = "earth";
var currentUserName = "잘생긴강인";
console.log(ourPlanet,currentUserName);
const BIRTHDAY = '18.04.1982';
let birthYear = BIRTHDAY.slice(-4); //Number 함수를 사용하지 않고도 숫자/문자열 변환 자유로움.
console.log(birthYear);
const age = 2022-birthYear+1; //const 설정시 따로 입력 불가 바로 설정
console.log(age);
console.log(typeof birthYear, typeof age);