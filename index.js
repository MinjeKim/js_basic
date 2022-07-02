// console.log("안녕하세요. 김민제입니다.");

// instance와 object 차이
// 리터럴 : 값을 표현하는 방법
// const f1 = function() { // 함수 리터럴
//     console.log("this is f1");
//}
// 할당 연산자
// const는 변수선언 표현식

// binding : 객체를 할당하는 것
// this가 있조. 이 클래스의 Instance가 바인딩 되는거져
// 할당 : 어떤 값, 리터럴이 들어가면 할당

// 바인딩은 링크만 걸어주는 것.

// 오브젝트를 정의한게 클래스
// method와 function의차이
// 클래스 안에서 존재하는게 method, 클래스 없이도 존재할 수 있는게 function

// 실행컨텍스트 : 런타임 메모리영역
// 힙, 스택, 스태틱

/**
 * 변수와 상수
 * 
 * 변수 = 선억 + 식별자 + 타입 + 값 + 스코프
 * 
 * 스코프는 변수가 영향을 미치는 사정권
 * 
 * 식별자 규칙
 * 
 */

// let s = "xxxxxx";
// let S = new String("xxxxxxxx");

// console.log(s, S);

// // javascript runtime 이 메모리를 정리

// let N = Number(3000);
// console.log(N);

// N = Number(300);
// console.log(N);

// console.log(NaN === NaN)
// console.log(isNaN(7808));

// backtick은 변수를 쓸 수 있다
// 그리고 개행을 써도 오류가 안난다 일반 문자열에서는 \n을 써야 함.
// const x= `my name is kim`;

// console.log(x);

// // symbol은 유니크한 값이다. 
// const sy1 = Symbol("sy");
// const sy2 = Symbol("sy");

// console.log(sy1, sy2, sy1 == sy2);

// null은 메모리 주소까지 할당은 되었으나 

// let a = new String("aa");
// let b = a;
// a = "test";
// console.log(a, b);

// let o1 = {id : 1};
// let o2 = o1;
// o1.id = 2;
// console.log(o1.id, o2.id);

// i = 100;     // primitive
// i.toString(); // error?
// // const u = 'hong'; // primitive
// let u = 'hong'; // primitive
// u.age = 30; // error? No! (: 오브젝트 강제형변환)
// console.log(u.age); // 여기서도 강제 형변환이 일어났음 -> undefined
// u = 7;
// console.log(u);  // ?


// console.log(i); // error! why? 
// let i = 1;


// let과 const는 호이스팅은 되지만 할당이 안되고 에러가 남


// console.log(x1); // (가)
// console.log(y1); // (나)
// var x1 = (y1 = 10 * 20);
// console.log(x1, y1);

// ES6에서 변수선언시 변수선언자를 안쓰면 let으로 취급됨.

// let x = 5;
// console.log(3 - -x);
// console.log(-10 * -x * -2);
// console.log(2 ** 3 ** 2);

// 산술연산자 중 %의 연산자 우선순위를 증명하시오. 

// +, -, *, /, %, 부호, ++, --

// const f1 = (a, b, c) => {
//     let abc1 = a % b ** c;
//     let abc2 = a % (b ** c);
    
//     console.log(abc1 == abc2, abc1, abc2);
    
// };

// f1(3,4,5);

const pm1 = 2 + 5 % 3 - 1; // 3 ==> +,- < %
const pm2 = 2 + (5 % 3) - 1;
console.log(pm1, pm2, pm1 === pm2 ? '+- < %' : '+- > %');

const ms1 = 3 % 2 * 5 % 3 * 10; // 3 ==> +,- < %
const ms2 = 3 % 2 * (5 % 3) * 10;
const ms3 = (3 % 2 * 5) % 3 * 10;
console.log(ms1 === ms3 ? 'same' : (ms1 === ms2 ? '*/ < %' : '*/ > %'));

const pow1 = 2 ** 5 % 3 ** 2;
const pow2 = 2 ** (5 % 3) ** 2;
console.log(pow1, pow2, pow1 === pow2 ? '** < %' : '** > %');
