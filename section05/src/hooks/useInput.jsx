import { useState } from 'react';

function useInput() { //get을 use로 바꾸면 훅이 된다(커스텀 훅 완성)
    const [input,setInput] = useState("");
    
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input,onChange];
}

export defaule useInput;