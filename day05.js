// // function

// function hello() {
//     return "Hello, World!";
// }


// console.log(hello());

// function printFnReturnValue(fn) {
//      console.log(fn.name, fn()); 
// }

// printFnReturnValue(hello);

// function f(n) {
//     if (typeof n === 'object' && Reflect.has(n, 'id')) n.id += 1;
//     else n += 1;
// }

// let n = 10;
// let nobj = {id : 10};
// f(n);
// f(nobj);
// console.log(n, nobj);

// const user = {id : 1, name: "hong"};
// function fds1(id, name) {
//     console.log(`id is ${id}, name is ${name}`);
// }

// function fds2(id, name) {
//     console.log(`id is ${id}, name is ${name}`);
// }


// fds1(user.id, user.name);

// 한번만 쓰고 버릴만한 함수는 이렇게 쓰면 메모리도 아끼고 전역변수도 아끼고 넘~ 조음
// (function() {
//     console.log(11);
// })();

// const counter = (function() {
//     let curr = 0;
//     return {
//         inc: function (n) {
//             curr += n;
//         },
//         getCurr: function ()  {
//             return curr;
//         }
//     }
// })();

// counter.inc(1);
// counter.inc(10);
// counter.inc(100);
// console.log(counter.getCurr());

// 일케 쓰는거보다
// const f3 = (n, m) => {
//     return n*m;
// };
// 일ㄱ케쓰는게 깔끔해보인다
// const f4 = (n,m) => n * m;

// console.log(f3(10,20), f4(10,20));


// const obj = {
// 	name: 'ObjName',
// 	bark1() {
// 		console.log('obj.bark=', this.name);
// 	},
// 	bark2: () => console.log('obj.bark2=', this.name),
// };
// obj.bark1();
// obj.bark2();

// let tot = 0;
// for (let i = 1; i <= 100; i += 1) {
//   tot += i;
// }
// console.log(tot);


// tot = 0;
// const recur = {
//     cnt: 1,
//     // f1(): function ff() {
//     f1() {
//         if(this.isLast) {
//             console.log(tot);
//         } else {
//             tot += this.cnt;
//             this.cnt += 1;
//             this.isLast = this.cnt === 101 ? true : false;
//             this.f1();
//         }
//     },
//     isLast: false
// }

// recur.f1();

// tot = 0;
// const sum1 = (n) => {
//     if (n === 1) return n;
//     return n + sum1(n-1);
// }

// tot = 0;
// const sum1_1 = (n) => {
//     if (n > 100) return 0;
//     return n + sum1_1(n+1);
// }

// console.log(sum1(100),sum1_1(1));


// const sum2 = (n, m) => {
//     if (n > m) return 0;
//     return n+sum2();
// }

// console.log(sum2());

const kim = {
	nid: 3,
	addr: 'Pusan',
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
};

const deepCopyObject = (obj) => {
    const newObj = {};
    for (prop in obj) {
        if (typeof obj[prop] === "object") {
            newObj[prop] = deepCopyObject(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }
    return newObj;
}

const newKim = deepCopyObject(kim);
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
console.log(kim.addr !== newKim.addr, 
    kim.oo.name !== newKim.oo.name,
    kim.oo.addr.city !== newKim.oo.addr.city); // true, true, true면 통과!
console.log(newKim, kim);

