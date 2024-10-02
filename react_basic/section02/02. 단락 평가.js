function returnFalse () {
    console.log("False 함수");
    return undefined; //falsy한 값
}

function returnTrue () {
    console.log("True 함수");
    return 10; //Truthy한 값
}

console.log(returnFalse() && returnTrue()) ;
//and 연산자, 앞에 F이기에 뒤에 함수는 호출조차 되지 않음

console.log(returnTrue() && returnFalse()) ;
//앞은 T이기에 함수는 둘다 호출하나 결과는 F

console.log(returnTrue() || returnFalse);
//or 연산자, 앞이 T라 뒤에 함수 호출 X 결과도 T

console.log(returnFalse() || returnTrue());
// 앞이 F라 뒤에 함수도 호출, 결과는 T

// 이게 단락 평가, 단락평가는 boolen 형태가 아닌 falsy한 값과 Truthy한 값으로도 작성 가능
// 단락 평가 활용 사례

function printName(person) {
    const name = person && person.name
    console.log(name || "person의 값이 없음") //둘다 TT인 경우 ||는 첫 번째 T, &&는 두 번째 T 출력
}

printName(); //F -> F T (콘솔에 T인 "person의 값이 없음" 출력) 
printName({name:"김민주"}); //T T -> T T (첫 번째 T를 콘솔에 출력)


