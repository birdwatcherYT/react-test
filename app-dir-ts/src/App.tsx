import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        神様
        <MakeImage />
        <MakeButton />
      </header>
    </div>
  );
}

const images: string[] = [
  "https://birdwatcheryt.github.io/image/kjbt.svg",
  "https://birdwatcheryt.github.io/image/god.svg"
];

function MakeImage() {
  const [index, setIndex] = useState(0);
  const clickImg = () => {
    setIndex((index + 1) % images.length);
  };
  return <img src={images[index]} onClick={clickImg}></img>;
}

function MakeButton() {
  const [count, setCount] = useState(0);// const [値, set関数] = useState(初期値);
  const click = () => {
    setCount(count + 1);
  };
  return <span className="myButton" onClick={click}>いいね {count}</span>;
}

export default App;
