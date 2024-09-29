// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result = num + str; // num이 문자형으로 변환됨

// 2. 명시적 형 변환
// -> 프로그래머 내장 함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str); // 문자열 -> 숫자

let str2 = "10개"
let str2Num2 = Number(str2); //-> NaN 출력
let str2Num2_1 = parseInt(str2); //-> 10 출력, 숫자로 시작일 때만 사용 가능

let num1 = 20;
let numToStr1 = String(num1); // 숫자 -> 문자열

