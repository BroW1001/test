import React from "react"; //创建元素
import ReactDOM from "react-dom"; //渲染元素
import "./index.css";
// import App from "./App";
// import Test from "./components/Test";
import TestClass from "./components/TestClass";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <TestClass />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
