import React, { Component } from "react";
import * as LifeCycleDebugger from './LifeCylceDebugger'
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
    // console.log("Display constructor");
  }

  async componentWillMount() {
    // console.log("Display componentWillMount");
  }

  async componentDidMount() {
    // console.log("Display componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    // const table = new LifeCycleDebugger.PreCommit('componentWillReceiveProps', nextProps.text, '--', this.props.text)
    // // console.log("I doubled prop", this.props);
    // //  this.setState({ data: nextProps.text * 2 });
    // console.table(table)
  }

  // componentWillUpdate(nextProps, nextState) {
  //   // const table = new LifeCycleDebugger.PreCommit('componentWillUpdate', nextProps.text, nextState.data, this.props.text, this.state.data)
  //   // //   if (this.props.text !== nextProps.text) {
  //   // //     this.setState({ data: nextProps.text + 2 });
  //   // //   }
  //   // console.table(table)
  //   console.log('nextState', nextState)
  //   console.log('this.state', this.state)
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    // const table = {}
    // table.title = 'getDerivedStateFromProps'
    // table.nextProps = nextProps.text
    // table.prevState = prevState.data
    // console.table(table)
    console.log('prevState', prevState)
  }

  shouldComponentUpdate() {
    //  console.log("Display shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    // const table = new LifeCycleDebugger.PostCommit('componentDidUpdate', prevProps.text, prevState.data, this.props.text, this.state.data)
    //  console.log("I added 2 to prop", this.props);
    // console.table(table)

    console.log('prevState', prevState)
    console.log('this.state', this.state)
    if (this.props.text !== prevProps.text) {
      this.setState({ data: this.props.text + 2 });
    }
  }

  render() {
    const { text } = this.props;
    const { data } = this.state;
    const table = {}
    table.LifeCycleMethod = 'Render'
    table.props = text
    table.state = data
    console.table(table)
    return (
      <div>
        <p>Display prop: {text}</p>
        <p>Display state: {data}</p>
      </div>
    );
  }
}
