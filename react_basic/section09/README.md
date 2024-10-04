9.1 useReducer
import { useReducer } from 'react';
//reducer: 상태를 실제로 변화시키는 변환기 역할

function reducer (state, action) {
switch (action.type){
case 'INCREASE' : return state + action.data;
case 'DECREASE' : return state - action.data;
default :
return state;
}
}

const Exam = () => {

    // dispatch: 상태 변화가 있어야 한다는 사실을 알리는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        dispatch({
            type: "INCREASE",
            data: 1,
        }) //액션 객체: 상태가 어떻게 변화되길 원하는지
    }

    const onClickMinus = () => {
        dispatch({
            type:"DECREASE",
            data: 1,
        })
    }

    return <div>
        <h1>{state}</h1>
        <button onClick={onClickPlus}>+</button>
        <button onClick={onClickMinus}>-</button>
    </div>

};

export default Exam;

9.2 UseReducer로 투두리스트 업그레이드
import './App.css'
import Header from './components/Header';
import Editor from './components/Editor';
import List from './components/List';
import { useState, useRef, useReducer } from 'react';

const mockData = [
{
id:0,
isDone:false,
content:"React 공부하기",
date: new Date().getTime(),
},
{
id:1,
isDone:false,
content:"빨래하기",
date: new Date().getTime(),
},
{
id:2,
isDone:false,
content:"밥먹기",
date: new Date().getTime(),
},
];

function reducer (state,action) {
switch(action.type){
case 'CREATE':
return [action.data, ...state];
case 'UPDATE':
return state.map((item)=>item.id === action.targetId ? {...item,isDone:!item.isDone} : item);
case 'DELETE':
return state.filter((item=>item.id !== action.targetId));
default :
return state;
}
}

function App() {
const [todos, dispatch] = useReducer(reducer, mockData);
const idRef = useRef(3);

const onCreate = (content) => {
dispatch({
type:"CREATE",
data:{
id:idRef.current++,
isDone:false,
content:content,
date:new Date().getTime(),
}
})
};

const onUpdate = (targetId) => {
dispatch({
type:"UPDATE",
targetId:targetId,
})
};

const onDelete = (targetId) => {
dispatch({
type:"DELETE",
targetId: targetId,
})
};

return (
<div className="App">
<Header />
<Editor onCreate={onCreate}/>
<List
      todos={todos}
      onUpdate={onUpdate}
      onDelete={onDelete}
    />  
 </div>
)
}

export default App;
