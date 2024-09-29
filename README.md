- 새로운 리액트 프로젝트를 위한 기본 설정
  npm create vite@latest : 새로운 리액트 앱 생성
  npm i : dependencies의 library 설치
  npm run dev : 리액트 앱 가동하기
  "no-unused-vars":"off",
  "react/prop-types": "off" - 실습을 위한 불필요한 옵션 삭제 (eslintrc의 rules에 작성)
  불필요한 파일,코드 삭제 : public 폴더의 vite 파일과 assets 폴더의 react 파일 삭제
  App.jsx의 return문 내용 삭제,import 문과 useState도 삭제
  App.css, index.css 내용 전체 삭제 main.jsx의 strictmode 삭제

  - section07
    라이프 사이클 : 생애주기, Mount -> Update -> UnMount
    Mount (Like 탄생): 컴포넌트가 탄생하는 순간, 화면에 처음 렌더링되는 순간
    Update (Like 변화): 컴포넌트가 리렌더링됨을 뜻함
    UnMount (Like 죽음) : 컴포넌트가 사라짐 즉 렌더링에서 제외 되는 순간

  useEffect : 컴포넌트의 사이드 이펙트를 제어하는 새로운 리액트 훅
  사이드 이펙트 : 부작용이란 뜻, 리액트에서는 컴포넌트의 동작에 따라 파생되는 효과 정도로 해석 가능
  ex) 동작:컴포넌트 내부의 값 변경 -> 사이드 이펙트:콘솔에 변경된 값 출력
  동작:컴포넌트 마운트 -> 사이드 이펙트: 콘솔에 "Mount"라고 출력
  -> useEffect는 이런 사이드 이펙트를 새롭게 만들거나 제어함

  \*안되는 것:useEffet에서
  useEffect (()=>{
  console.log('count: ${count} / input: ${input}')
  }, [count, input]);

- section08
  투두리스트 만들기
