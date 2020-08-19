import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor");
    this.state = {
      count: 0,
    };
  }

  componentWillMount() {
    console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("App componentWillReceiveProps nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("App componentWillUpdate nextProps", nextProps);
    console.log("App componentWillUpdate nextState", nextState);
  }

  shouldComponentUpdate() {
    console.log("App shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("App componentDidUpdate prevProps", prevProps);
    console.log("App componentDidUpdate prevState", prevState);
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("App render");
    return (
      <div>
        <Display text={this.state.count} />
        <Button onClick={this.onClickHandler}>Increment</Button>
        <p>Current state: {this.state.count}</p>
      </div>
    );
  }
}
