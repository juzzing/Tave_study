// 1. 배열 생성
let arrA = new Array(); // 1.1 배열 생성자
let arrB = []; // 1.2 배열 리터럴 (대부분 사용)

let arrC = [
    1,
    2,
    3,
    true, 
    "hello",
    null, 
    undefined,
    () => {} 
]; // 어떤 타입이든 다 저장 가능, 길이 한계 없음

// 2. 배열 요소 접근
let item1 = arrC[0]; // 1 출력
let item2 = arrC[1]; // 2 출력

arrC[0] = "hello"; // 0 번째 값인 1을 hello로 수정

console.log(arrC);
