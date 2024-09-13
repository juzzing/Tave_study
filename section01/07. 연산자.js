// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 6; // 곱셉 연산 먼저 일어남

// 3. 복합 대입 연산자
let num7 = 10;
num7 += 20; // 원래 num7의 값에 20을 추가해란 뜻
num7 *= 20;
num7 %= 10;

// 4. 증감 연산자
let num8 = 10;
num8 ++; // num8이 1 늘어나 11이 됨, 해당 라인 다음부터 적용 (후위 연산)
++num8; // 해당 라인부터 바로 적용 (전위 연산)

// 5. 논리 연산자
let or = true || false;

let and = ture && false;

let not = !true;

// 6. 비교 연산자, true 또는 false로 출력
let comp1 = 1 === 2; // ==은 값만 비교, ===은 자료형까지 비교
let comp2 = 1 !== 2;

let comp3 = 2 > 1;
let comp4 = 2 >= 2;



