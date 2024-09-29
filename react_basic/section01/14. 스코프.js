// 스코프
// -> 전역 스코프, 지역 스코프
// -> 전역 스코프: 전체 영역에서 접근 가능
// -> 지역 스코프: 특정 영역에서만 접근 가능

let a = 1; //전역 스코프

function funcA() {
    let b = 2; // 지역 스코프
    console.log(a);
}

funcA();
console.log(b); //에러

if(ture) {
    let c = 1;
}

console.log(c); //error

for (let 1 = 0; i < 10; i++) {
    let d = 1;
}

console.log(d); //error

// 함수도 지역 스코프를 갖는다
// -> 함수 선언식은 특별하게 함수 안에서만 지역 스코프를 갖고 if(조건), for (반복) 안에선 안 가짐
