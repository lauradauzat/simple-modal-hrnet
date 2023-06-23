import React from 'react';
import { render } from "react-dom";
import { Modal } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>Hello React</h1>
    <Modal/>
  </div>
);

render(<App />, document.getElementById("root"));
