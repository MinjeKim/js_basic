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

console.log("\n\n\n\n\n\n\n\n\n");

const isNull = _v => _v === null || _v === undefined;
const range = (start, end, add) => {
    if (
        isNull(start) ||                    // start가 비었을 때
        (isNull(end) && !isNull(add)) ||    // end가 null, add가 값이 있을 때
        add === 0                           // add가 0일 때
    ) { 
        return false;
    }
    
    const res = [];
    let condition = ""; // for문 조건식

    if (isNull(end)) { // 매개변수에 값이 하나만 있을 때
        end = start;
        start = 1;
    }

    add = isNull(add) ? (end > start ? 1 : -1) : add; // add가 비었을 때, end가 start보다 클 경우 1 할당, 작을경우 -1 할당
    condition = end > start ? "i <= end" : " i >= end";

    for (let i = start; eval(condition); i += add) res.push(i);
    console.log(res);
}

// range(1, 10, 1);  // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(1, 10, 2);  // [1, 3, 5, 7, 9]
// range(1, 10);     // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
// range(10, 1);     // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -1); // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// range(10, 1, -2); // [ 10, 8, 6, 4, 2 ]
// range(5);         // [1, 2, 3, 4, 5] 
console.time(100);
range(100);       // [1, 2, 3, 4, 5, …, 99, 100] 
console.timeEnd(100);
// console.log();

console.log();