// // function

const { restart } = require("nodemon");

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
    arr: [1, 2, 3, {aid: 1}, [10,20]],
	oo: { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
    f1: function ff() { console.log("this is ff"); }
};

const kim2 = [
    3,
    'Pusan',
    { id: 1, name: 'Hong', addr: { city: 'Seoul' } },
    [{ id: 1 }, { id: 2 }],
    function f1() { console.log("this is f1"); }
  ];

// const copyArray = function( arr ) {
//     const new_arr = [];
//     for (let i of arr) {
//         if (Array.isArray(i)) {
//             new_arr.push(copyArray(i));
//         } else if (typeof i === "object") {
//             new_arr.push(deepCopyObject(i));
//         } else {
//             new_arr.push(i);
//         }
//     }
//     return new_arr;
// }

const deepCopyObject = (obj) => {
    const newObj = (typeof obj === 'object' && Array.isArray(obj)) ? [] : {};  // 이걸 추가하면 copyArray를 안써도됨 ㄹㅇ개신기
    for (const prop in obj) {
        // if (Array.isArray(obj[prop])) {
        //     // newObj[prop] = [...obj[prop]];
        //     newObj[prop] = copyArray(obj[prop]);
        // } else 
        if (typeof obj[prop] === "object") {
            newObj[prop] = deepCopyObject(obj[prop]);
        } else {
            newObj[prop] = obj[prop];
        }
    }

    return newObj;
}

const newKim = deepCopyObject(kim);
const newKim2 = deepCopyObject(kim2);

const kim3 = [1,2,3,4,4,5,'tta','hnhtta','ttqwea','ttasa'];
const newKim3 = deepCopyObject(kim3);
console.log(kim3, newKim3);

// newKim
newKim.addr = 'Daegu';
newKim.oo.name = 'Kim';
newKim.oo.addr.city = 'Daejeon';
newKim.arr[3].aid = 100;
newKim.arr[4][1] = 200;
newKim.f1 = function ff() {console.log("this is ff2");}

// newKim2
newKim2[2].addr.city = 'Daegu';
newKim2[1] = 'Jeju';
newKim2[3][1].addr = 3;

console.log(kim.addr !== newKim.addr, 
    kim.oo.name !== newKim.oo.name,
    kim.oo.addr.city !== newKim.oo.addr.city); // true, true, true면 통과!
console.log(newKim, kim);
console.log(newKim2, kim2);

kim.f1();
newKim.f1();

// function deepCopyObject2(obj) {
// 	const copyObj = {};
// 	for (let k in obj) {
// 		const tmpObj = obj[k];
// 		console.log(k, tmpObj, typeof tmpObj);
// 		// if (Array.isArray(tmpObj)) copyObj[k] = [...tmpObj];
// 		if (Array.isArray(tmpObj)) copyObj[k] = copyArray(tmpObj);
// 		else if (typeof tmpObj === 'object') copyObj[k] = deepCopyObject(tmpObj);
// 		else copyObj[k] = obj[k];
// 	}

// 	return copyObj;
// }


const deepEqual = (obj1, obj2) => {
    if (!obj1 || !obj2) return false;
    
    let key1 = Object.keys(obj1);
    let key2 = Object.keys(obj2);
    if (key1.length === key2.length) {
        for (let i = 0; i < key1.length; i += 1) {
            if (key1[i] !== key2[i] ) {
                return false;
            }
        }
    } else return false;
    
    for (let i of key1) {
        let tempres = true;
        if (typeof obj1[i] === 'object' && typeof obj2[i] === 'object') tempres = deepEqual(obj1[i], obj2[i]);
        else tempres = (obj1[i] === obj2[i]);

        if (!tempres) return false;
    }
    
    
    return true;
}


console.log(deepEqual(newKim, kim));