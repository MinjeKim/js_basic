// const user = {
//     '': 1,           // OK
//     ' ': 1,          // OK
//     123: 1,          // OK?        cf. user[123] * 10 = ?
//     true: 1,         // OK?        cf. user[false] = 0
//     'id': 1,         // OK?
//     id: 2,           // user.id ? 2
//     [`name`]: 'Hong',  // OK? No     cf. user[`name`] = 'Hong'; // OK
//     [Symbol()]: 'Hong', // OK?       cf. s = Symbol(); user[s] = 9; // OK
//     my_friends: ['Han', 'Kim'], // OK? NO -는 식별자규칙에 어긋남. _로 써야함
//     "0y": '000',       // OK? NO 숫자가 앞에 올 수 없음. 문자열로 싸줘야 가능
//     getInfo: () => `${this.id}-${this.name}`,       // OK?
//     getInfo() { return `${this.id}-${this.name}`; }, // OK?
//   } 

// console.log(user, this.id);

// console.log(Object.keys(user)); // Symbol
// console.log(Reflect.ownKeys(user))

// Object.keys로 검색하면 심볼이 안나옴 // 주의해야함~~
// Reflect 메모리에 있는 인스턴스를 문자열로 보여줌 ?? 아닐수도있음 ㅎ;
// 자료구조 형태는 배열입니다.

// user.addr = '붓싼';

// // const s = Symbol();
// // user[s]= "xxxxx";

// // console.log(user[s]);
// console.log(Object.getOwnPropertyDescriptor(user, 'addr'));
// console.log(Object.getOwnPropertyDescriptors(user));  // enumerable, configurable
// console.log(Object.defineProperty(user, 'age', { value: 39, writable: false}));
// console.log(Object.getOwnPropertyDescriptor(user, 'age'));

// console.log(Object.keys(user),              // key 만
//             '\n-------------------\n',
//             Object.values(user),            // literal 만
//             '\n-------------------\n',
//             Object.entries(user)            // key, literal 전부 다
//             );

// const park = Object.fromEntries([ ['id', 7], ['nm', 'Park'] ]);

// const newUser1 = Object.assign({}, park);    // assign은 무겁다.
// 그럼 오브젝트에 멀쓰냐? 스프레드 연산자 쓰믄댄다
// const newUser1 = { ...park };
// newUser1.id = 5;
// console.log(newUser1.id, park.id);

/**

원시값(primitive)만을 갖는 객체 kim을 복사하는 프로그램을 Object의 클래스 메소드 / spread 연산자를 사용하지 말고 작성하시오.
// const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr); // true면 통과!

*/

function copyObject(obj) {
    const newObj = new Object();
    for (const prop in obj) {
        newObj[prop] = obj[prop];
    }
    return newObj;
}

const kim = {nid: 3, nm: 'Hong', addr: 'Pusan'};
const newKim = copyObject(kim);
newKim.addr = 'Daegu';
console.log(kim.addr !== newKim.addr,"\n",kim,"\n",newKim);