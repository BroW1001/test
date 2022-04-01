import { Component } from "react";
export default class TestClass extends Component {
  state = {
    //state中保存的就是状态
    num: 0,
    label: "LBW",
    sign: ["A", "B", "C", "D"],
  };
  handleClick = (e) => {
    // e.preventDefault(); //阻止默认事件
    // e.stopPropagation(); //阻止事件冒泡
    // alert("调用函数了。");
    // console.log("this", this);
    this.setState({ label: "lbw", num: this.state.num + 1 });
  };
  render() {
    const { sign } = this.state;
    return (
      <>
        <div>This is TestClass component.</div>
        <div>num:{this.state.num}</div>
        <div>label:{this.state.label}</div>
        <hr />
        {sign.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        <button onClick={this.handleClick}>更新</button>
        {/* <a href="http://www.baidu.com" onClick={this.handleClick}>
          Click to jump to Baidu.
        </a> */}
      </>
    );
  }
}
