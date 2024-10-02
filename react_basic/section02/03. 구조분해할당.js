// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);

//2. 객체의 구조 분해 할당
let person = {
    name: "김민주",
    age: 22,
    hobby: "테니스",
};

// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;
// ->
let {name, age: myAge, hobby} = person;
console.log(name, myAge, hobby);

//3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({name, age, hobby,}) => {
    console.log(name, age, hobby);
};

func(person); //객체 person을 넘겨야 콘솔에 출력됨

