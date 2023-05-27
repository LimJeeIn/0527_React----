const { useState } = React;

function MyHeader({ pageName, a }) {
  // const {pageName, a} = props 도 같다
  // 이 안에 pagaName이라는 키로 값을 가져올수있음
  // 마찬가지로 a라는 키로 값을 가져올 수 있다.

  return (
    <>
      <h1>아 이건 제목이야 여기는 {pageName}!</h1>
      <h2>이건 부제목이야 여기는 {pageName} 부제목!</h2>
    </>
  );
}

// pageName="홈페이지" 이거는 아래처럼나온다
//
// props = {
//   pageName:"홈페이지"
//   a:"a"
// }

function HomePage(params) {
  const [title, setTitle] = useState('홈페이지');
  const buttonHandler = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div>
      <MyHeader pageName={title} a='a' />
      <input type='text' onChange={buttonHandler} />
      {/* <button onClick={buttonHandler}>버튼</button> */}
      <button>버튼</button>
      {title}
      {/* <MyHeader pageName='페이지2' a='a' />
      <MyHeader pageName='홈페이지3' a='a' />
      <MyHeader pageName='홈페이지4' a='a' /> */}
    </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  // const header = document.createElement("h1");
  // header.innerText = "아 이건 제목이야";
  // root.appendChild(header);
  root.render(<HomePage />);
}

App();

// jsx란 무엇인가(기초편)
// react component에서 props
// react hook state
// 메모장 합시다

// jsx좀 더 살펴보기 <<
// 기능분리하는법 (사람들이랑 같이하는법) <<
