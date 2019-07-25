import React from "react";
import "./App.css";
import ClickCounter from "./component/ClickCounter";
import HoverCounter from "./component/HoverCounter";
import DisplayName from "./component/Display";

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
      <DisplayName />
    </div>
  );
}

export default App;
