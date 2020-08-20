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
    console.log("P render");
    return <p>{this.props.value}</p>;
  }
}

export default class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: null,
    };
    console.log("Display constructor");
  }

  async componentWillMount() {
    console.log("Display componentWillMount");
    this.setState({ isLoading: true });
    console.log("Display data fetch started ++++++++++++");
    const { data } = await axios.get("https://randomuser.me/api/");
    console.log("Display data fetched --------");
    this.setState({ isLoading: false, data: data.results[0].cell });
  }

  async componentDidMount() {
    console.log("Display componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("Display componentWillReceiveProps nextProps", nextProps);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Display componentWillUpdate nextProps", nextProps);
    console.log("Display componentWillUpdate nextState", nextState);
  }

  shouldComponentUpdate() {
    console.log("Display shouldComponentUpdate");
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Display componentDidUpdate prevProps", prevProps);
    console.log("Display componentDidUpdate prevState", prevState);
  }

  render() {
    console.log("Display render");
    const { text } = this.props;
    const { isLoading, data } = this.state;
    return (
      <div>
        <P value={text} />
        {isLoading && <p>Loading.......</p>}
        {data && <p>{data}</p>}
      </div>
    );
  }
}
