// useRef로 컴포넌트의 변수 생성하기
import { useState } from 'react';
import { useRef } from 'react';

const Register3 = () => {
    const [input,setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    }); 

const countRef = useRef(0); // 컴포넌트가 리렌더링 되어도 리셋되지 않음
const inputRef = useRef(); // 컴포넌트가 리렌더링 되어도 리셋되지 않음

// let count = 0; 은 계속 리셋됨

    const onChange = (e) => {
        countRef.current ++;
        console.log(countRef.current);
        setInput({
            ...input, 
            [e.target.name] : e.target.value,
        });
    };

    const onsubmit = () => {
        if(input.name === ""){
            //이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    }

    return (
    <div>
        <div>
        <input
            ref={inputRef}
            name = "name"
            value = {input.name}
            onChange = {onChange} 
            placeholder = {"이름"} 
        />
        </div>

        <div>
        <input
            name = "birth"
            value = {input.birth}
            onChange = {onChange}
            type = "date"
        />
        </div>

        <div>
            <select
                name = "country"
                value = {input.country}
                onChange = {onChange}
            >
                <option value='kr'>한국</option>
                <option value='us'>미국</option>
                <option value='uk'>영국</option>
            </select>
        </div>

        <div>
            <textarea
                name = "bio"
                value = {input.bio}
                onChange = {onChange}
            />
        </div>

        <button onClick = {onsubmit}>제출</button>

    </div>
    );
};

export default Register3;