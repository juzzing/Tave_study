// math 모듈

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

export default function multiply(a,b){
    return a*b;
} // default를 작성하면 math 모듈을 대표하는 기본값, import 할 때 중괄호 쓰면 안됨

// 1. CJS 모듈 시스템
// module.exports = {
//     add: add,  (add 객체에 add 함수를 저장한 것)
//     sub: sub,
// };

// 2. ESM 모듈 시스템
export { add, sub };
// 이렇게 따로 부르지 않고 함수 앞에 export를 바로 붙여도 됨 (export function (){} ...)
