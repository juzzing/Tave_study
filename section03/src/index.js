// 모듈 시스템1 : common js(CJS) 사용하기

// const moduleData = require("./math");
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// const {add,sub} = require("./math");
// console.log(add(1,2));
// console.log(sub(1,2));

// 모듈 시스템2 : ESModule 사용하기 (CJS랑 함께 사용 불가, package.json에서 type:"module" 추가해주기)

// import mul, {add,sub} from "./math.js" // multiply 말고 임의로 mul로 불러와도 됨 (디폴트는 중괄호 X)
// console.log(add(1,2));
// console.log(sub(1,2));
// console.log(mul(2,3));

// 라이브러리: 다양한 기능을 모듈화 해 놓아 설치 후 사용 가능한 것
import randomColor from 'randomcolor'; //라이브러리는 경로 필요 X 이름만

const color = randomColor();
console.log(color); // 컬러값이 랜덤으로 출력됨


