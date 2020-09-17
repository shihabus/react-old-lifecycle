import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
import DisplayRewamp from './DisplayRewamp'

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
    // console.log("App componentDidMount");
    console.log("-------------+++-------------------");
  }

  componentWillReceiveProps(nextProps) {
    // console.log("App componentWillReceiveProps nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    // console.log("App componentWillUpdate nextProps", nextProps);
    // console.log("App componentWillUpdate this.props", this.props);
    // console.log("App componentWillUpdate nextState", nextState);
    // console.log("App componentWillUpdate this.state", this.state);
  }

  shouldComponentUpdate() {
    // console.log("App shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("App componentDidUpdate prevProps", prevProps);
    // console.log("App componentDidUpdate this.props", this.props);
    // console.log("App componentDidUpdate prevState", prevState);
    // console.log("App componentDidUpdate this.state", this.state);
    console.log("-------------+++-------------------");
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.setState(function (prevState, props) {
      return {
        count: prevState.count + 1,
      };
    });
  };

  render() {
    const { count } = this.state;
    // console.log('App render state',count)
    return (
      <div>
        <Button onClick={this.onClickHandler}>Increment</Button>
        {/* <Display text={count} /> */}
        <DisplayRewamp text={count} />
        <p>APP Current state: {count}</p>
      </div>
    );
  }
}
