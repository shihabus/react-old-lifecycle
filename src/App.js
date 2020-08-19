import React from 'react';
import './App.css';

class Child extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:props.data
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   console.log('nextProps',nextProps)
  //   console.log('this.props',this.props)
  //   this.setState({data:nextProps.data})
  // }

  static getDerivedStateFromProps(props,state){
    console.log('----props',props);
    console.log('----state',state);
    return {
      data:props.data
    }
  }

  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('nextProps---',nextProps);
  //   console.log('nextState------',nextState);
  // }
  
  
  render(){
    return(
      <div style={{
        padding:'20px',
        backgroundColor:'red'
      }}>
        {this.state.data}
      </div>
    )
  }
}

const MemoBtn= React.memo(function Button(props){
  return (
    <button {...props} style={{
      margin:'10px 20px',
      backgroundColor:'maroon',
      padding:'10px 20px'
    }}></button>
  )
})

class App extends React.Component {
    constructor(props){
      super(props)
      this.state={
        count:0
      }
    }

    clickHandler=()=>{
      this.setState({count:this.state.count+1})
    }

    render(){
      return(
        <>
          <div style={{
          padding:'20px',
          backgroundColor:'yellow'
        }}>{this.state.count}</div>
          <Child data={this.state.count}/>
         <MemoBtn onClick={this.clickHandler}>+ Add</MemoBtn>
         <MemoBtn onClick={this.clickHandler}>+ Add</MemoBtn>
        </>
      )
    }
}

export default App;