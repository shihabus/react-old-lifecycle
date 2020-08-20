import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App constructor");
    this.state = {
      count: 0,
      isLoading: true,
      data: null,
    };
  }

  async componentWillMount() {
    console.log("App componentWillMount");
    this.setState({ isLoading: true });
    console.log("App data fetch started ++++++++++++");
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log("App data fetched --------");
    this.setState({ isLoading: false, data: data.results[0].cell });
  }

  componentDidMount() {
    console.log("App componentDidMount");
    console.log("-------------+++-------------------");
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
    console.log("-------------+++-------------------");
  }

  onClickHandler = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("App render");
    const { isLoading, data, count } = this.state;
    return (
      <div>
        <Display text={count} />
        <Button onClick={this.onClickHandler}>Increment</Button>
        <p>Current state: {count}</p>
        {isLoading && <p>Loading.......</p>}
        {data && <p>{data}</p>}
      </div>
    );
  }
}
