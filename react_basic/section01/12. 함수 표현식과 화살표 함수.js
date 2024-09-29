// 1. 함수 표현식
// -> 호이스팅이 허용되지 않음
function funcA () {
    console.log("funcA");
}

let varA = funcA; // 함수를 어떤 변수에 담은 것
console.log(varA) // 함수 전체가 출력
varA(); // 함수값이 출력

// 익명함수
// 변수에 바로 함수를 담을 때, 함수명 생략 가능
let varB = function () {
    console.log("funcB");
}

varB();

// 2. 화살표 함수
let varC = () => 1;
let varD = (value) => {
    console.log(value);
    return value + 1;
}

console.log(varC());
console.log(varD());