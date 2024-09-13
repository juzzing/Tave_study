// 1. 함수선언
// -> 함수를 새롭게 만드는 행위, 만드는 것만으로 콘솔에 출력되지 않음

function greeting () {
    console.log ("안녕하세요");
}

console.log("호출 전");
greeting(); // 함수를 호출해야 출력됨, 소괗호 필수
console.log("호출 후");

// ex) 직사각형 넓이 구하는 함수 만들가
function getArea(width, height) {
    let area = width * height;

    return area; // 함수가 return문을 만나면 값을 반환하고 바로 종료, 바로 오는 콘솔문이 있어도 출력 안함
}

let area1 = getArea(10,20);
console.log(area1);

// 함수 안에 함수, 중첩 함수
function getArea(width, height) {
    function another () {
        console.log("another");
    }

    another ();
    let area = width * height;

    return area; 
}

let area2 = getArea(10,30);
console.log(area2);

getArea(10,40);


