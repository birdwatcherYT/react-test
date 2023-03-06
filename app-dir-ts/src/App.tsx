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
        draggable table
        <MakeTable />
      </header>
    </div>
  );
}

const DATA = [
  [1, "AAA", "a"],
  [2, "BBB", "b"],
  [3, "CCC", "c"],
  [4, "DDD", "d"],
];

function MakeTable() {
  const [data, setData] = useState(DATA);
  const [dragIndex, setDragIndex] = useState<number | undefined>(undefined);

  const dragStart = (index: number) => {
    setDragIndex(index);
  };
  const dragEnter = (index: number) => {
    if (index === dragIndex) return;
    let copy = data.concat();
    const deleted = copy.splice(dragIndex!, 1);
    copy.splice(index, 0, deleted[0]);
    setData(copy);
    setDragIndex(index);
  };
  return (
    <table>
      {data.map(
        (row, index: number) =>
          <tr draggable={true}
            onDragStart={() => dragStart(index)}
            onDragEnter={() => dragEnter(index)}
          >
            {row.map(x => <td>{x}</td>)}
          </tr>
      )}
    </table>
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
