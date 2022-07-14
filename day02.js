// eslint-disable-next-line no-unused-vars
// const n = 100;

// let s1 = n.toString();
// let s2 = n + '';

// console.log(s1, typeof s1, s2, typeof s2);


// let n1  = Number(s1);
// let n2 = new Number(s1);

// console.log(n1, typeof n1, n2, typeof n2);

// const x = 5; 
// var x;
// console.log(typeof x, typeof !!x, !!x);
// boolean으로 만들고 싶으면 앞에 !! 붙이면 됨.

// const d1 = Date(); const d2 = new Date();
// console.log(d1.valueOf(), d2.valueOf()); // 뒤에꺼는 timestamp
// console.log(typeof d1, typeof d2);

// let s = {id: 1} + 2;   // 병합 연산자
// let r = x + '30';      // 병합 연산자
// let q = x * '30';      // 산술 연산자
// console.log(s, typeof s, r, typeof r, q, typeof q);  // [object Object]2 string 530 string 150 number

// let a = 1, b = 2;
// let c = (a++, b++);
// let d = 0;
// console.log(a,b,c);

// console.log(!!d--, !!d);

// const T = true, F = false; 
// let x = 1;
// console.log(T || x++, F || x++, x); // true 1 2
// console.log(T && x++, F && x++, x); // 2 False 3

// let a = 0b1010, b = 0b1100;         // cf. 8진수(0o), 16진수(0x)
// console.log(a & b, a | b, a ^ b, ~b);

// console.log(0.1 + 0.2, 0.1 + 0.2 === 0.3);
// console.log(0.1 + 0.2);

// console.log(((2.4) % 1) , ((2.4) % 1) === 0.4);

// for(let i = 0.1; i < 1; i = i + 0.1) {
//     console.log((i * 10).toFixed(2) / 10 === 1 ? '' : (i * 10).toFixed(2) / 10);
//     // console.log((i * 10).toFixed(2) / 10 === 1 ? '' : (i * 10).toFixed(2) / 10,'\t', i);
// }

// for(let i = 0.1; i < 1; i = i + (0.1*10/10)) {
//     console.log(i);
//     // console.log((i * 10).toFixed(2) / 10 === 1 ? '' : (i * 10).toFixed(2) / 10,'\t', i);
// }

/**
 * 소숫점 5자리까지 입력가능하고, 이 값에 0.1을 더해서 결과를 출력하려 한다. 사용자가 0.21354 를 입력했을 때 정확한 값을 출력하시오.
 * 0.21354 + 0.1 // 0.31354 ?
 * 0.31354
 */

// console.log(0.21354, (0.21354 + 0.1).toFixed(5),0.21354 + 0.1);

// function test(input) {
//     return (input + 0.1).toFixed(5);
// }

// console.log(test(0.12345),test(0.12332), test(0.45642), test(0.76594));

// const bi = 456789876545678765456787656787656789N;
// console.log(bi + 1);

// console.log(0.28+0.14);

// console.log(0.2 + 0.08);
// console.log(0.1 + 0.04);
// console.log(0.01 + 0.02);
// console.log(0.1 + 0.2);

// function t1() {
//     console.log('t');
// }

// for (let i = 0; i<2;t1()) {
//     i++;
// }

/*
const len = arr.length; 이렇게 써놓으면 안전하다.
for (let i = 0; i < arr.length; i++) { … }
const fnVal = fn(); 이렇게 써놓으면 안전하다.
for (let i = 0; i < fn(); i++) { … }

*/

// ex1) 2 ~ 10 사이의 무리수를 소숫점 3자리까지 출력하시오. (Math.sqrt())
/**
 * 2 1.414
 * 3 1.732
 * 5 2.2xx
 * …
 * 10 3.xxx
 */

for (let i = 2; i < 11; i = i + 1) {
    const a = Number(Math.sqrt(i).toFixed(3));
    // if (a - Math.floor(a)) {
    if(a - parseInt(a)) {
        console.log(i, "\t", a);
    }
}

let getday = new Date().getDay();
const day = ["일", "월", "화", "수", "목", "금", "토"];
console.log(`오늘은 ${day[getday]}요일입니다.`);

// ---------------------------------------------

let day_s = "";
switch(getday) {
  case 0:
    day_s = "일"
    break;
  case 1:
    day_s = "월"
    break;
  case 2:
    day_s = "화"
    break;
  case 3:
    day_s = "수"
    break;
  case 4:
    day_s = "목"
    break;
  case 5:
    day_s = "금"
    break;
  case 6:
    day_s = "토"
    break;
  default:
    day_s = "ERROR";
    break;
}
console.log(`오늘은 ${day_s}요일입니다.`);

// ---------------------------------------

const day_ternary = getday == 0 ? "일" : 
(getday == 1 ? "월" : 
(getday == 2 ? "화" : 
(getday == 3 ? "수" : 
(getday == 4 ? "목" : 
(getday == 5 ? "금" : "토")))));
console.log(`오늘은 ${day_ternary}요일입니다.`);

// ---------------------------------------

const weekName = "일월화수목금토".charAt(getday);
console.log(`오늘은 ${weekName}요일입니다.`);

// ---------------------------------------

const num1 =        123314567890987656787678767n;
const num2 = BigInt(123314567890987656787678767);
console.log(typeof num1, typeof num2, num1 - num2);

