// function f() {
//     let i = 1;
//     { 
//         let i = 2; // block scope
//         console.log(i);
//     }
//     console.log(i);
// }

// f();

// var gg = 1;
// let bb = 2;
// function f1() {
//   var gg = 11;
//   let bb = 22;
//   console.log('f1>', gg, bb); // gg, bb? 11, 22
//   f2();  // callable? Yes (: 함수도 hoisting)
// }

// function f2() {
//   console.log('f2>', gg, bb); // ? 1, 2
// }

// f1();

// function varFn() {
//     var v = 1;
//     {
//       var v = 2;
//       var vv = 3;
//       console.log(v, vv);
//     }
//     console.log(v, vv); // ?
//   }
  
  
//   function letFn() {
//     let l = 1;
//     {
//       let l = 2, ll = 22;
//       console.log(l, ll);
//     }
//     console.log(l); // ?
//   }
  
//   varFn();
//   letFn();

