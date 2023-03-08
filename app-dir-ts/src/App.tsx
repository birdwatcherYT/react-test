import React, { useState, useRef } from 'react';
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
        see console
        <MakeStartEndButton />
        <MakeTextField />
        svg
        <MakeGraphics />
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

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let canceled = false;

async function heavyFunction() {
  let sum = 0;
  for (let i = 0; i < 1e10; ++i) {
    sum += i;
    if (i % 1e6 === 0) {
      console.log(i);
      await sleep(0);
      if (canceled)
        return -1;
    }
  }
  return sum;
}

function MakeStartEndButton() {
  const [running, setRunning] = useState(false);
  // pattern1
  const startJob1 = async () => {
    setRunning(true);
    const ans = await heavyFunction();
    console.log(ans); // number
    console.log("finish");
    canceled = false;
  };
  // pattern2
  const startJob2 = () => {
    setRunning(true);
    const ans = heavyFunction();
    console.log(ans);// promise
    ans.then(
      // 終了時の動作を書く
      async () => {
        console.log(ans); // promise
        console.log(await ans); // number
        console.log("finish");
        canceled = false;
      }
    );
  };
  const endJob = () => {
    canceled = true;
    setRunning(false);
  };
  return (
    <div>
      <button onClick={startJob1} disabled={running}>heavy job start1</button>
      <button onClick={startJob2} disabled={running}>heavy job start2</button>
      <button onClick={endJob}>stop</button>
    </div>
  );
}

function MakeTextField() {
  const inputElement = useRef<any>(undefined);
  return (
    <div>
      <input ref={inputElement} defaultValue="aaaaa"></input>
      <button onClick={() => { console.log(inputElement.current?.value); }}>get</button>
    </div>
  );
}

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
      <tbody>
        {data.map(
          (row, i: number) =>
            <tr key={"row" + i} draggable={true}
              onDragStart={() => dragStart(i)}
              onDragEnter={() => dragEnter(i)}
            >
              {row.map((x, j) => <td key={i + "_" + j}>{x}</td>)}
            </tr>
        )}
      </tbody>
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

function MakeGraphics() {
  return (
    <svg viewBox="0 0 500 500" >
      <circle cx="150" cy="50" r="10" stroke="red" fill="grey" />
      <text x="35" y="35" fill="cyan" stroke="red" strokeWidth="1">Hello World!</text>
      <rect x="100" y="100" width="100" height="100" stroke="lightgreen" strokeWidth="5" fill="orange" />
      <line x1="250" y1="50" x2="300" y2="200" stroke="white" strokeWidth="5" />
      <polygon points="300,10 350,90 400,10" />
    </svg>
  );
}

export default App;
