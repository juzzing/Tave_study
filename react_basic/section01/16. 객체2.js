// 1. 상수 객체
// -> 상수에 저장된 것도 추가, 수정, 삭제가 가능
// animal에 아예 새로운 값을 할당하는 건 안되나 프로퍼티를 건들이는 건 가능
const animal = {
    type: "고양이",
    name: "두부",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "밤비"; // 수정
delete animal.color; // 삭제

// 2. 매서드
// -> 값이 함수인 프로퍼티를 망함

const person = {
    name: "김민주",
    //매서드
    sayHi: function () {
        console.log("안녕!");
    },
}

// 매서드 선언
const person2 = {
    name: "김민주",
    sayHi() {
        console.log("안녕!!!!");
    }
}

person.sayHi();
person2["sayHi"]();