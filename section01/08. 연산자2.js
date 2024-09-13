// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능, null과 undefined가 아닌 값을 찾아내는 연산자

let var1;
let ver2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // undefined가 아닌 것을 찾아 10만 출력
let ver5 = var2 ?? var3; // undefined이 없으면 첫 번째 값 var2가 출력

// 실무 예제
let userName = "김민주";
let userNickName = "Winterlood";

let displayName = userName ?? userNickName; // userName이 null이면 Winterlood가 출력됨

// 2. typeof 연산자
// -> 값의 타입을 반환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello";

let t1 = typeof var7; // string 출력

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
let var8 = 10;

// ex) 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝" : "홀"; // 조건식 ? 참일 때 : 거짓일 때


