import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import List from "./list";
import { getInitialData, genNextData } from "./data";

function App() {
  const [data, setData] = useState(getInitialData());
  const doSwitch = () => {
    setData(d => {
      [d[0], d[1]] = [d[1], d[0]];
      d[0].score += 1000;
      d[1].score += 2000;
      return [...d];
    });
  };
  useEffect(() => {
    // const timer = setInterval(() => setData(genNextData()), 1000);
    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <button onClick={doSwitch}>switch</button>
      <List data={data} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
