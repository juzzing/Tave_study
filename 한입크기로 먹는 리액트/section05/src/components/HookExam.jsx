// React Hooks : class 컴포넌트의 기능을 function 컴포넌트에서도 사용가능하게 하는 것
//               ex) useState(state 기능을 낚아채오는 훅), useRef

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부(조건문, 반복문)로 호출 불가능
// 3. 나만의 훅(Custiom Hook)을 직접 만들기 가능

import useInput from './../hooks/useInput';

const HookExam = () => {
    const[input,onChange] = useInput();
    const[input2,onChange2] = useInput();

    return (
        <div>
            <input value = {input} onChange = {onChange} />
            <input value = {input2} onChange = {onChange2} />
        </div>
    )
};

export default HookExam;