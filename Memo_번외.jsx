const { useState } = React;

const Memo = ({ title, idx }) => {
  return (
    <>
      <div>{idx + 1}번 메모</div>
      <article>{title}</article>
    </>
  );
};

function MemoList({ titles }) {
  return (
    <div>
      <h1>이번에는 메모장 리스트 제목이 생겼지롱</h1>
      {titles.map((title, idx) => {
        return <Memo title={title} idx={idx} />;
      })}
    </div>
  );
}

function HomePage(params) {
  const [memo, setMemo] = useState('');
  const [memos, setMemos] = useState([]);
  const onChangeHandler = (e) => {
    setMemo(e.target.value);
  };
  const onClickButtonHandler = () => {
    const newTitles = [...memos, memo];
    setMemos(newTitles);
  };
  return (
    <div>
      <input type='text' onChange={onChangeHandler} />
      <button onClick={onClickButtonHandler}>버튼</button>
      <br></br>
      <MemoList titles={memos} />
    </div>
  );
}

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<HomePage />);
}

App();
