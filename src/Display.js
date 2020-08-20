import React, { Component } from "react";
import axios from "axios";
class P extends Component {
  constructor(props) {
    super(props);
    console.log("P constructor");
  }
  componentWillMount() {
    console.log("P componentWillMount");
  }

  componentDidMount() {
    console.log("P componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("P componentWillReceiveProps nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("P componentWillUpdate nextProps", nextProps);
    console.log("P componentWillUpdate nextState", nextState);
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("P componentDidUpdate prevProps", prevProps);
    console.log("P componentDidUpdate prevState", prevState);
  }

  render() {
    return <p>{this.props.value}</p>;
  }
}

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
    console.log("Display constructor");
  }

  async componentWillMount() {
    console.log("Display componentWillMount");
  }

  async componentDidMount() {
    console.log("Display componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Display componentWillReceiveProps nextProps", nextProps);
    console.log("Display componentWillReceiveProps this.props", this.props);
    console.log("I doubled prop", this.props);
    this.setState(() => ({ data: nextProps.text * 2 }));
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Display componentWillUpdate nextProps", nextProps);
    console.log("Display componentWillUpdate nextState", nextState);
    console.log("Display componentWillUpdate this.props", this.props);
    console.log("Display componentWillUpdate this.state", this.state);
  }

  shouldComponentUpdate() {
    //  console.log("Display shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Display componentDidUpdate prevProps", prevProps);
    console.log("Display componentDidUpdate this.props", this.props);
    console.log("Display componentDidUpdate prevState", prevState);
    console.log("Display componentDidUpdate this.state", this.state);
    console.log("I added 2 to prop", this.props);
    if (this.props.text !== prevProps.text) {
      this.setState((prevState, props) => ({ data: props.text + 2 }));
    }
  }

  render() {
    console.log("Display render");
    const { text } = this.props;
    const { data } = this.state;
    return (
      <div>
        <p>Display prop: {text}</p>
        <p>Display state: {data}</p>
      </div>
    );
  }
}
