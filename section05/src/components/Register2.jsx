// Register1을 효율적으로 만들기

import { useState } from 'react';

const Register2 = () => {
    const [input,setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : "",
    }); // 하나의 state로 관리

    const onChange = (e) => {
        console.log(e.target.name, e.target.value);
        setInput({
            ...input, // 스프레드 연산자 사용시 변경하고자 하는 값만 변경됨
            [e.target.name] : e.target.value,
        });
    };

    return (
    <div>
        <div>
        <input
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

    </div>
    );
};

export default Register2;