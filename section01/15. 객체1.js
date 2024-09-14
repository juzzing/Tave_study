// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴

// 2. 객체 프로퍼티 (객체 속성)
let person =  {
    name: "김민주",
    age: "22",
    hobby: "테니스",
    job: "FE Developer",
    extra: {},
    10: 20, // 숫자로 키 선언 가능
    "like cat": true, // 띄어쓰기 있으면 ""로 감싸주기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // 김민주 출력

let age = person["age"]; // 쌍 따옴표와 함께 문자열로 쓸 것
console.log(age); // 22 출력

let property = "hobby";
let hobby = person[property]; // 변수 property의 값을 출력 (테니스 출력)

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer"; // job 속성을 생성
person["favoriteFood"] = "떡볶이" // favoriteFood 속성을 생성

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator" // job이 educator로 수정됨
person["favoriteFood"] = "초콜릿"

// 3.4 프로퍼티 삭제하는 방법
delete person.job; // job 속성 자체가 삭제됨
delete person ["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법
let result1 = "name" in person; // in 연산자는 왼쪽 속성이 오른쪽 객체에 있냐 없냐를 출력, true 출력
let result2 = "cat" in person; // false 출력