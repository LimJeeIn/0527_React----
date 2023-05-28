const { useState } = React;
//             ({children, ...props}) = 입력받은거 / 구조분해할당으로도 사용가능
function Button(props) {
  console.log(props);
  // props는 js 객체

  return (
    // props안에 onClick안에 onPlus 함수가 들어있다
    <button onClick={props.onClick} style={{ width: '50px', height: '50px' }}>
      {props.children}
    </button>
  );
}

function HomePage() {
  //   let num = 0;
  let [num, setNum] = useState(0);

  function onPlus() {
    console.log('+눌림');
    num += 1;
    setNum(num);
  }

  function onMinus() {
    console.log('-눌림');
    num -= 1;
    setNum(num);
  }
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <span>{num}</span>
      <Button onClick={onPlus}>+</Button>
      <Button onClick={onMinus}>-</Button>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);
}

App();

// 1. 멘토님 코드
// function HomePage() {
//     const [num, setNum] = React.useState(0);
//     // 1. num을 0으로 초기화해서 변수를 만들어줌
//     // 1.1. num은 바뀌면 화면도 같이 바뀌는 변수임
//     // 2. 근데 이때 "num=1"형식으로 바꿀 수없음
//     // 3. 그래서 num을 바꾸기위해서 setNum이라는 함수를 사용해야함!
//     // setNum((cur)=>cur+1) 이렇게 해도됨니다.
//     // 이녀석은 배열을 줌!
//     // 근데 배열 0번째에는 상태가있고
//     // 1번째에는 상태를 바꿔주는 함수가있음!
//     //아래에 span 안의 여기 숫자 0 부분에서 0을 변수로 만들어주세요
//     // 버튼에 클릭이 되었습니다 라고 로그가 찍히는 이벤트를 넣고싶습니다.

//     // setNum 은 num을 바꿔주고 화면에 새로 그려주세요 하는 함수인거임

//     //let num = 0
//     const 실행시키면num증가 = () => {
//       setNum(num + 1);
//     };
//     const 실행시키면num감소 = () => {
//       setNum(num - 1);
//     };
//     // jsx안에서 값을 사용하고싶으면 {} 중괄호로 감싸라!

//     return (
//       <>
//         <h1>숫자 카운터 만들기</h1>
//         <span>여기 숫자 {num}</span>
//         <button onClick={실행시키면num증가}>+</button>
//         <button onClick={실행시키면num감소}>-</button>
//       </>
//     );
//   }

//   function App() {
//     const root = ReactDOM.createRoot(document.getElementById("root"));
//     root.render(<HomePage />);
//   }

//   App();

// 2.
// ->  중복된 값을 porps 로 넘기다
// Button.jsx
// function Button(props) {
//   return (
//     <button
//       onClick={props.onClick}
//       style={{
//         width: '50px',
//         height: '50px',
//       }}
//     >
//       {props.children}
//     </button>
//   );
// }

// // HomePage.jsx
// function HomePage() {
//   const [num, setNum] = React.useState(0);
//   const 실행시키면num증가 = () => {
//     setNum(num + 1);
//   };
//   const 실행시키면num감소 = () => {
//     setNum(num - 1);
//   };

//   return (
//     <>
//       <h1>숫자 카운터 만들기</h1>
//       <span>여기 숫자 {num}</span>
//       <Button onClick={실행시키면num증가}>+</Button>
//       <Button onClick={실행시키면num감소}>-</Button>
//     </>
//   );
// }

// function App() {
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<HomePage />);
// }

// App();

//3. 상태 끌어올리기
// Button.jsx
function Button(props) {
  console.log(props);
  console.log(props.children);
  return (
    <button
      onClick={props.onClick}
      style={{
        width: '50px',
        height: '50px',
      }}
    >
      {props.children}
    </button>
  );
}
function Counter(props) {
  const 실행시키면num증가 = () => {
    props.setNum(props.num + 1);
  };
  const 실행시키면num감소 = () => {
    props.setNum(props.num - 1);
  };
  return (
    <>
      <span>여기 숫자 {props.num}</span>
      <div>
        <span>이름:우경석</span>
      </div>
      <Button onClick={실행시키면num증가}>+</Button>
      <Button onClick={실행시키면num감소}>-</Button>
    </>
  );
}
// HomePage.jsx
function HomePage() {
  // 모든 것을 관리 할수 있는 부모인 HomPage로 useState 상태관리를 해준다
  // 이 useState 한줄이 상태끌어올리기 한것이다
  const [num, setNum] = React.useState(0);

  // 원래는 Counter컴포넌트에서만 num이라는 state가 필요했다.
  // 그런데 그 상위에있는 Homepage에서 num라는 state가 필요해짐...
  // 상태 끌어올리기 언쩨씀???
  // 내가 전달해줄수없는 컴포넌트가 생겼을때 공통 부모에서 관리하도록 하고싶을때
  return (
    <>
      <h1>숫자 카운터 만들기</h1>
      <Counter num={num} setNum={setNum} />
      <div>{num * 2}</div>
    </>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);
}

App();
