// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 * num2);
// console.log(num1 % num2); 나머지 구하기(모듈러 연산)

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 수치 연산 실패시 결과값으로 사용

// 2. String Type
let myName = "김민주"; // 쌍따옴표 없으면 변수를 의미
let myLocation = "목동";
let introduce = myName + myLocation; //김민주목동

//템플릿 리터럴 문법, ``(백택)을 이용해 변수를 동적으로 활용

let introduceText = `${myName}은 ${myLocation}에 거주합니다`;

// 3. Boolean Type - 상태를 의미할 때 주로 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다) - 직접 값이 없다는 걸 표현할 때 사용
let empty = null;

// 5. Undefined Type - 변수를 초기화하지 않았거나 존재하지 않는 것을 가져올 때
let none;
console.log(none);
console.log(empty);
console.log(isEmpty);





