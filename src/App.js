import React from 'react';
import './App.css';

class Child extends React.Component{
  constructor(props){
    super(props)
    this.state={
      data:props.data
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps',nextProps)
    console.log('this.props',this.props)
    this.setState({data:nextProps.data})
  }
  
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

class App extends React.Component {
    constructor(props){
      super(props)
      this.state={
        count:0
      }
    }

    render(){
      return(
        <>
          <div style={{
          padding:'20px',
          backgroundColor:'yellow'
        }}>{this.state.count}</div>
          <Child data={this.state.count}/>
          <button onClick={()=>this.setState({count:this.state.count+1})}>+ Add</button>
        </>
      )
    }
}

export default App;