// window.addEventListener('load', (event) => {
//     document.getElementById('button').addEventListener('click', (event) => {
//       console.log(event.target); // (가)
//     });
  
//     for (let i = 0; i < 5; i++) {      // ⇒ ⇒ ⇒
//       setTimeout(() => console.log(i), 1000); // (나)
//     }
  
//     console.log('The End'); // (다)
// });  

// const f1 = function(f,val){
//     return f(val);
// }
// const f1 = (f, val) => f(val);
// f1(console.log, 'f1');

// const f2 = function(f){
//     return function(...args) {
//         console.log(f…)
//     };
// }
// const f2 = f => (...args) => 
// console.log(f.name, f(...args));

// f2(Math.max)(1, 3, 2, 5, 4);

// const ff = f1;

// const fns = [f1, f2];


// reduce([1, 2, 3], (a, b) => a + b, 0); // 6이면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
// reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
// reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과! (0 조심!!)

// const reduce = (arr, cb, st = 0) => {
//     if(!arr || !cb) {
//         throw new Error("undefined or null");
//     } 
//     let res = 0;

//     if (arr[0] !== 0 && cb(st,arr[0]) === 0) res = arr[0];
//     else res = cb(st, arr[0]);

//     for (let i = 1; i < arr.length; i+=1) {
//         res = cb(res, arr[i]);
//     }
//     return res;
// }


// console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6이면 통과!
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a + b)); // 15면 통과!
// console.log(reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
// console.log(reduce([2, 2, 2], (a, b) => a * b)); // 8이면 통과! (0 조심!!)
// console.log(reduce([999], (a, b) => a * b)); // 8이면 통과! (0 조심!!)
// const d = [9999].reduce((a, b) => a * b); // 8이면 통과! (0 조심!!)
// console.log(d); 

// console.log(reduce([2, 2, 2], (a, b) => a * b)); // 8이면 통과! (0 조심!!)

// const reduce = (배열, 콜백함수, 초기값) => { …cb()
// st : index 값
// const reduce1 = (arr, f1, st = 0) => {
    
    // }
    
    // const a = [1,2,3].reduce((a,b) => a+b, ''); // 6이면 통과!
    // const b = [1, 2, 3, 4, 5].reduce((a, b) => a + b); // 15면 통과!
    // const c = [1, 2, 3, 4, 5].reduce((a, b) => a * b, 2); // 120이면 통과!
    // const d = [2, 2, 2].reduce((a, b) => a * b); // 8이면 통과! (0 조심!!)
    // console.log(a); 
    // console.log(b); 
    // console.log(c); 
    // console.log(d); 
    
    // console.log(0/0);
    
    // const tychoi = (arr, func, prev) => {
    //     const prevExist = !(prev === undefined);
    //     prev = prev ?? arr[0];
    //     let curr = prev;
    //     for (let i = 0; i < arr.length; i++) {
    //         curr = !prevExist && i === 0 ? curr : func(curr, arr[i]);
    //     }
    //     return curr;
    // }
    // console.log(tychoi([1, 2, 3], (a, b) => a + b, 0)); // 6이면 통과!
    // console.log(tychoi([1, 2, 3, 4, 5], (a, b) => a + b)); // 15면 통과!
    // console.log(tychoi([1, 2, 3, 4, 5], (a, b) => a * b, 1)); // 120이면 통과!
    // console.log(tychoi([2, 2, 2], (a, b) => a * b)); // 8이면 통과! (0 조심!!)
    // console.log(tychoi([999], (a, b) => a * b, 0)); // 8이면 통과! (0 조심!!)

// const refacChoi = (arr, func, prev) => {
//   if(!Array.isArray(arr)) throw new Error();

//   let i = prev || prev === '' ? 0 : 1;
//   let curr = prev || prev === '' ? prev : arr[0];

//   for (; i < arr.length; i += 1) {
//     curr = func(curr, arr[i]);
//   }

//   return curr;
// }

// console.log(refacChoi([1,2,3,4], (a,b) => a+b, 0));
// console.log(refacChoi([1,2,3,4], (a,b) => a+b, null));
// console.log(refacChoi([1,2,3,4], (a,b) => a+b, undefined));
// console.log(refacChoi([1,2,3,4], (a,b) => a+b, ''));
// console.log("----------------");
// console.log([1,2,3,4].reduce((a,b) => a+b, 0));
// console.log([1,2,3,4].reduce((a,b) => a+b, null));
// console.log([1,2,3,4].reduce((a,b) => a+b, undefined));
// console.log(['1','2','3','4'].reduce((a,b) => a+b, undefined));
// console.log([1,2,3,4].reduce((a,b) => a+b, ''));


const lec_reduce = (arr, f, initValue) => {
  let i = 0;
  let ret = initValue ?? (i += 1, arr[0]);
  // let ret = initValue ?? arr[i++];
  // if (!initValue && initValue !== '') {
  //   ret = arr[0];
  //   i += 1;
  // }
  for ( ; i < arr.length; i += 1) {
    ret = f(ret, arr[i]);
  }
  return ret;
}

console.log(lec_reduce([1,2,3], (a,b) => a+b, ''));
console.log(lec_reduce([1,2,3], (a,b) => a+b, null));

