// 1. if 조건문 (if문)
// -> if로 시작해서 else로 끝내야함
let num = 11;

if (num >= 10) {
        console.log("num은 10 이상입니다");
        console.log("조건이 참입니다!")
} else if (num >= 5) {
        console.log("num은 5 이상입니다");
} else {
        console.log("조건이 거짓입니다");
}

// 2. Switch 문
// -> if문과 기능 자체는 동일, 다수의 조건을 처리할 때 if보다 더 직관적
// break 안 걸면 다 출력시킴
let animal = "cat";

switch (animal) {
    case "cat":{
        console.log("고양이");
        break;
    }
    case "dog":{
        console.log("개");
        break;
    }
    case "bear":{
        console.log("곰");
        break;
    }
    case "snake":{
        console.log("뱀");
        break;
    }
    case "tiger":{
        console.log("호랑이");
        break;
    }
    default: {
        console.log("그런 동물은 전 모릅니다");
    }
}

// else나 default 입력 안 한 상태에서 조건이 거짓이면 아무것도 출력되지 않음



