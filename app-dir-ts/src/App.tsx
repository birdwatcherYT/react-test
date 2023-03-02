import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        テスト
        <MakeButton />
      </header>
    </div>
  );
}

function MakeButton() {
  const [count, setCount] = useState(0);// const [値, set関数] = useState(初期値);
  const click = () => {
    setCount(count + 1);
  };
  return <span className="myButton" onClick={click}>いいねボタン{count}</span>;
  // return <div className="myButton" onClick={click}>いいねボタン{count}</div>;
}

export default App;
