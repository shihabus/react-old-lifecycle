import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  async componentWillMount() {
    // console.log("App componentWillMount");
  }

  componentDidMount() {
    console.log("App componentDidMount");
    console.log("-------------+++-------------------");
  }

  componentWillReceiveProps(nextProps) {
    // console.log("App componentWillReceiveProps nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("App componentWillUpdate nextProps", nextProps);
    // console.log("App componentWillUpdate nextState", nextState);
  }

  shouldComponentUpdate() {
    // console.log("App shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate prevProps", prevProps);
    // console.log("App componentDidUpdate prevState", prevState);
    // console.log("-------------+++-------------------");
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <Button onClick={this.onClickHandler}>Increment</Button>
        <Display text={count} />
        <p>APP Current state: {count}</p>
      </div>
    );
  }
}
