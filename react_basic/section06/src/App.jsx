import './App.css'
import Controller from './components/Controller';
import Viewer from './components/Viewer'
import { useState } from 'react';

function App() {

  const [count,setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count+value);
  };

  return (
    <div className="App">
    <h1>Simple Counter</h1>
    <section>
      <Viewer count = {count} />
    </section>

    <section>
      <Controller onClickButton={onClickButton} />
    </section>
    </div>
  )
}

export default App;

// 컴포넌트 간 데이터를 주고 받으려면 props를 이용해야 함
// props는 부모 자식 간만 데이터를 주고 받을 수 있음
// Viewer와 Controller에 state를 만들면 상태 변화 함수를 서로에게 넘겨줄 수 없음
// 따라서 App에서 count state는 Viewer에게 setCount는 별도의 이벤트 핸들러로 Controller에게 전달

