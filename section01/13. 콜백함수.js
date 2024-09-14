// 1. 콜백함수

function main(value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end");   
}

function sub() {
    console.log("i am sub");
}

main(sub);

// 함수 표현식으로 쓰면
main(function sub() {
    console.log("i am sub");
})

main(() => {
    console.log("i am sub");
})

// 2. 콜백 함수의 활용
function repeat(count){
    for (let idx = 1; idx <= count; idx ++) {
        console.log(idx);
    }
}
repeat(5); // 1,2,3,4,5 출력

function repeatDouble(count){
    for (let idx = 1; idx <= count; idx ++) {
        console.log(idx*2);
    }
}
repeatDouble(5); //2,4,6,8,10 출력

// -> 이렇게 중복 코드가 발생할 경우 콜백함수를 이용
function repeat3(count, callback){
    for (let idx = 1; idx <= count; idx ++) {
        callback(idx);
    }
}
repeat3(5, function (idx) {
    console.log(idx * 2); // 2,4,6,8,10 출력
})
repeat3(5, (idx) => {
    console.log(idx * 3); // 3,6,9,12,15 출력
})


