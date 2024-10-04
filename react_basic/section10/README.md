10.1 최적화란

- 최적화: 웹 서비스의 성능을 개선하는 모든 행위
- 최적화 방법: 서버의 응답 속도 개선, 이미지 폰트 코드 파일 등의 정적 파일 로딩 개선, 불필요한 네트워크 요청 줄임
  -React App 내부의 최적화 방법: 컴포넌트 내부의 불필요한 연산 방지, 불필요한 함수 재생성 방지, 불필요한 리렌더링 방지

  10.2 UseMemo와 연산 최적화

- UseMemo란: '메모이제이션' 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅
  const getAnalyzedData = () => {
  const totalCount = todos.length;
  const doneCount = todos.filter((todo)=>todo.isDone).length;
  const notDoneCount = totalCount - doneCount;

            return {totalCount, doneCount, notDoneCount}
        };

        const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
        useMemo를 이용해 개선하기
        const {totalCount, doneCount, notDoneCount} =
        useMemo(() => {
            console.log("getAnalyzedData 호출!");
            const totalCount = todos.length;
            const doneCount = todos.filter((todo)=>todo.isDone).length;
            const notDoneCount = totalCount - doneCount;

            return {totalCount, doneCount, notDoneCount}
        },[todos]);
        -> 불필요한 연산(검색어 입력)을 수행하지 않음

  10.3 React.memo와 컴포넌트 렌더링 취적화

- React.memo: 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
- 불필요한 리렌더링 막기
  import { memo } from 'react';
  // 고차 컴포넌트 (HOC)
  export default memo(TodoItem, (prevProps, nextProps)=> {

      if(prevProps.id !== nextProps.id) return false;
      if(prevProps.isDone !== nextProps.isDone) return false;
      if(prevProps.content !== nextProps.content) return false;
      if(prevProps.date !== nextProps.date) return false;

      return true;

  });
  // 반환값에 따라, Props가 바뀌었는지 안 바뀌었는지 판단
  // T -> props 바뀌지 않음 -> 리렌더링 X
  // F -> props가 바뀜 -> 리렌더링 O

  10.4 useCallback과 함수 재생성 방지

  const onDelete = useCallback((targetId) => {
  dispatch({
  type:"DELETE",
  targetId: targetId,
  });
  },[]);
  // onDelete 함수는 useCallback에 의해 마운트 됐을 때만 생성되고 그 이후 리렌더링이 발생해도 다신 생성되지 않게 최적화됨
  export default memo(TodoItem); 메모메서드만 적용해도 최적화가 완성됨

  - 최적화는 언제하면 좋을까 : 리액트에선 하나의 프로젝트를 거의 완성한 후 함 1. 기능 -> 2.최적화
  - 최적화의 대상 : 유저의 행동에 따라 갯수가 많아질 수 있는 컴포넌트, 함수를 많이 가진 컴포넌트
