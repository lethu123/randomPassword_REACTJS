import logo from "./logo.svg";
import "./App.scss";

import React, { Component } from "react";
// import { rdNumber, rdUpper, rdLower, rdSymbol } from './random';

const objectFunction = {
  number: "rdNumber",
  upper: "rdUpper",
  lower: "rdLower",
  symbol: "rdSymbol",
};
export class App extends Component {
  state = {
    result: "",
    number: false,
    upper: false,
    lower: false,
    len: 10,
    symbol: false,
  };

  // 53659535523
  input = React.createRef();
  rdNumber = () => {
    // floor lam tron xuong
    return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
  };
  rdUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  };
  rdLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  };
  rdSymbol = () => {
    const string = "*/><?+-";
    const temp = Math.floor(Math.random() * string.length);
    return string[temp];
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value),
    });
  };
  handleCheck = (e) => {
    this.setState({
      [e.target.name]: e.target.checked,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(this.state).indexOf(true) === -1) {
      alert("Mời bạn chọn cách random pasword trước!");
    } else {
      this.rdPassword(this.state);
    }
  };

  rdPassword = ({ number, upper, lower, len, symbol }) => {
    // tra ve 1 mang gom cac value cua 1 object
    // const arr = Object.values(this.state);
    const options = [{ upper }, { lower }, { number }, { symbol }];
    const checkedOptions = options.filter((item) => Object.values(item)[0]);
    let finalPassword = "";
    for (let i = 0; i <= len; i++) {
      const a =
        checkedOptions[Math.floor(Math.random() * checkedOptions.length)];

      finalPassword += this[objectFunction[Object.keys(a)[0]]]();

      // Random [a , b] -> Math.random() * (b-a+1) + a
      // [0 , 2] -> Math.random()* (2-0+1) + 0
    }
    console.log(finalPassword);
    this.setState({
      result: finalPassword,
    });
  };

  myFunction = () => {
    // var copyText = document.getElementById("myInput");
    var copyText = this.input.current;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  };

  outFunc = () => {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  };

  render() {
    const { len, number, lower, upper, result, symbol } = this.state;
    return (
      <div className="container">
        <div className="content">
          <form onSubmit={this.handleSubmit}>
            <div className="d-flex">
              <input
                type="text"
                name="result"
                className="inputText"
                onChange={this.handleChange}
                ref={this.input}
                value={result}
              />
              <div className="tooltip">
                <button
                  type="button"
                  className="btnCoppy"
                  onClick={this.myFunction}
                  onMouseOut={this.outFunc}
                >
                  <span className="tooltiptext" id="myTooltip">
                    Copy to clipboard
                  </span>
                  coppy
                </button>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <input
                type="checkbox"
                onChange={this.handleCheck}
                value={number}
                name="number"
                id="number"
              />
              <label htmlFor="number">number</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={this.handleCheck}
                name="upper"
                value={upper}
                id="upper"
              />
              <label htmlFor="upper">uppercase</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={this.handleCheck}
                name="symbol"
                value={symbol}
                id="symbol"
              />
              <label htmlFor="symbol">symbol</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={this.handleCheck}
                name="lower"
                value={lower}
                id="lower"
              />
              <label htmlFor="lower">lowercase</label>
            </div>
            <button>generate</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
