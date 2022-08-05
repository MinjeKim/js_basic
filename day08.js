// const a = [1,2,5,3,2];
// const obj = {};
// for(const [key, value] of Object.entries(a)) {obj[key] = value};
// Array.prototype.push.apply(obj, a);
// Array.prototype.push.call(obj, ...a);

// console.log(obj);

// console.log(a.sort());

// const ar2 = Array(5).fill(1);
// console.log(ar2);
// ar2.fill('X');
// console.log(ar2);
// ar2.fill('Y', 1);
// console.log(ar2);
// ar2.fill('Z', 2, 4);
// console.log(ar2);
// ar2.fill(0, -4, -1); //
// console.log(ar2);

// const arr = [1, 2, 3];
// const ar3 = Array.from(arr);
// const ar4 = [...arr];
// arr[2] = 33;
// ar4[2] = 33333;
// console.log(arr, ar3, ar4);

// const ar44 = [1,2,3];

// for (let i of ar44.keys()) console.log(i);




// console.log(range(-5));        // [-5, -4, -3, -2, -1]
// console.log(range(5, 5));      // [5]
// console.log(range(5, 5, 0));   // [5]
// console.log(range(5, 5, -1));  // [5]
// console.log(range(1, 5, 6));   // [1]
// const isNull = _v => _v === null || _v === undefined;
const range = (start, end, add) => {
    if (start < 0) {
        end = -1;
    } else {
        const tmp = start;
        end = end ?? (start = 1, tmp);
    }
    add = add ?? (end >= start ? 1 : -1);
    add = add === -1 ? 1 : add;
    
    if (start - end > add) return [];
    const res = [];
    
    let condition = ""; // 반복문 조건식
    condition = end >= start ? "i <= end" : " i >= end";
    
    add = add === 0 ? 1 : add;
    
    let i = start;
    while (eval(condition)) {
        res.push(i);
        i += add;
    }
    return res;
}
// console.log(range(-5));        // [-5, -4, -3, -2, -1]
// console.log(range(5, 5));      // [5]
// console.log(range(5, 5, 0));   // [5]
// console.log(range(5, 5, -1));  // [5]sc
// console.log(range(5, 1, 1));   // []
// console.log(range(1, 5, -1));  // []
// console.log(range(1, 5, 6));   // [1]

// console.log(range(1, 10, 1));    // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range(1, 10, 2));    // [1, 3, 5, 7, 9]
// console.log(range(1, 10));       // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// console.log(range(10, 1));       // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -1));   // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// console.log(range(10, 1, -2));   // [ 10, 8, 6, 4, 2 ]
// console.log(range(5));           // [1, 2, 3, 4, 5] 
// console.time(100);
// console.log(range(100));         // [1, 2, 3, 4, 5, …, 99, 100] 
// console.timeEnd(100);
// console.log(range(5, 5));  
// console.log(range(0));  
// console.log();

// console.log([1,2,3].pop());

console.log("\n\n\n\n\n");
const makeReverseArray = arr => { // if 줄이고 while 줄이고
    let result = [];
    let i = 0;
    let mid = Math.trunc(arr.length/2);
    
    if (arr.length%2 !== 0) { // [1,2,3,4,5]
        i = 1;
        result.push(arr[mid]);
        while (true) {
            result.unshift(arr[mid + i]);
            result.push(arr[mid - i++]);
            if (result.length !== arr.length) break;
        }
    } else { // [1,2,3,4,5,6]
        while (true) {
            result.unshift(arr[mid + i++]);
            result.push(arr[mid - i]);
            if (result.length !== arr.length) break;
        }
    }

    return result;
}

const reverseArray = arr => {
    for (let i = 0; i < arr.length/2; i += 1) {
        [arr[i], arr[arr.length - i-1]] = [arr[arr.length - i-1], arr[i]];
    }
    return arr;
};

// ex) 순수 함수
const a11 = [1, 2, 3, 4, 5];
console.log(makeReverseArray(a11), a11);

// ex2) 비순수 함수
const a22 = [1, 2, 3, 4, 5];
console.log(reverseArray(a22), a22);