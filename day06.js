// // ⇔ function declareFn(name) {
// const declareFn = function(name) {
//     // console.log(this, new.target, this.name, name);
//     this.name = name;
//     // console.log(this, new.target, this.name, name);
//     console.log(this.name, name);
// }
      
      
// const arrowFn = (name) => {
    
//     this.name = name;
//     // console.log(this, new.target, this.name, name);
//     console.log(this.name, name);
// }

// declareFn('dfn');
// arrowFn('afn');
      
// const dfn = new declareFn('D');
// // const afn = new arrowFn('A'); // OK?



// const obj = {
//     name: 'ObjName',
//     bark1() {
//       console.log('1=', this.name);
//       const self = this;
//       setTimeout( function() {
//         console.log('11=', self.name);
//       }, 1000);
//       console.log('xxxx');
//     },
//     bark2() {
//       console.log('2=', this.name);
//       setTimeout(() => {
//         console.log('22=', this.name);
//       }, 2000);
//     },
//   };
  
//   obj.bark1();
//   obj.bark2();
  
//   const printInfo = function (name) {
//     console.log(`ID is ${this.id}, Name is ${name}.`);
//   };
  
//   const hong = { id: 1, name: 'Hong' };
//   const kim = { id: 2, name: 'Kim' };
  
//   printInfo(kim.name);
//   printInfo.call(kim);
//   printInfo.call(hong, hong.name);
//   // printInfo.apply(kim, kim.name);
//   printInfo.apply(hong, [hong.name]);
//   printInfo.apply(hong, [...hong.name]); // ?
  
//   const printOne = printInfo.bind(hong);
//   printOne('Park');
  
//   const printHong = printInfo.bind(hong);
//   printHong('Kil-dong');

/*
const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1;
const getNextWeek = () => {
    widx += 1; // side-effect!
    if (widx >= weeks.length) widx = 0;
    return `${weeks[widx]}요일`;
};

let cnt = 0;
const intl = setInterval(() => {
    // widx += 2; // side-effect!
    console.log('call', cnt, getNextWeek());
    if ((cnt += 1) === 8) clearInterval(intl);
}, 1000);
*/

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
let widx = -1; // 클로저를 써서 짜라 / 근데 클로저 안써도 쓸수있다고 하면 해바라~
const getNextWeek = () => {
    // widx += 1; // side-effect!
    let widx_ = 0;
    return function(n) {
        widx_ += n;
        if (widx_ >= weeks.length) widx_ = 0;
        return `${weeks[widx_]}요일`;
    }
};

let cnt = 0;
const intl = setInterval(() => {
    widx += 2; // side-effect!
    console.log('call', cnt, getNextWeek()(cnt));
    if ((cnt += 1) === 8) clearInterval(intl);
}, 100);