11.1 Context란

- React Context: 컴포넌트 간의 데이터를 전달하는 또다른 방법, 기존의 props가 가진 단점 해결 가능
- Props의 단점: 부모 -> 자식으로만 데이터 전달 가능
  (Props Drilling: App -> ChildA -> ChildB 구조면 앱에서 바로 B로 전달 불가 A의 중간 다리 역할이 필수)

  11.2 Context 사용하기

  11.3 Context 분리하기

  - props가 바뀌면 리렌더링이 발생
    앞에 memo가 적용이 되었어도 useContext로부터 불러온 값이 변경이 되면 props가 변경된 것도 동일하게 리렌더링을 발생시킴 따라서 이 객체가 계속 다시 생성됨
  - 해결법: 변경될수 있는 값(TodoStateContext), 변경되지 않는 값(TodoDispatchContext)으로 분리해서 공급
