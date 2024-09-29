// Falsy한 값, 조건문에서 거짓으로 평가
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = ""
let f7 = 0n;

// if (!f1) {
//     console.log('falsy');
// }

// Truthy한 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {}

// if (t1) {
//     console.log("Truthy");
// }

// 3.활용 사례
function printName(person){
    // if (person === undefined || person === null) {
    //     console.log("person의 값이 없음")
    //     return;
    // } 얘랑 같은 뜻은
    if (!person)
        console.log("person의 값이 없음")
        return;       
    console.log(person.name);
}

// let person = { name:"김민주" };
// printName(person);

let person;
printName(person);


