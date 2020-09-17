import React, { Component } from 'react'
import axios from "axios";

export default class DisplayRewamp extends Component {

   constructor(props) {
      super(props)
      this.state = {
         product: 1,
         data: null,
         arr: 'noah'
      }
      console.log('constructor')
      console.log('this.props', this.props)
      console.log('this.state', this.state)
   }

   async componentDidMount() {
      console.log('componentDidMount')
      console.log('this.props', this.props)
      console.log('this.state', this.state)
      const { data: { title } } = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      this.setState({ data: title })
   }

   static getDerivedStateFromProps(nextProps, state) {
      console.log('getDerivedStateFromProps')
      console.log('nextProps', nextProps)
      console.log('state', state)
      console.log('================')

      return {
         product: nextProps.text * 2
      }
      // return null
   }

   componentDidUpdate(prevProps, prevState) {
      console.log('componentDidUpdate')
      console.log('prevProps', prevProps)
      console.log('prevState', prevState)
      console.log('================', new Date().valueOf())
      if (prevState.product !== this.state.product) {
         this.setState((prevS) => ({ product: new Date().valueOf() }))
      }
   }
   render() {
      const { product, data } = this.state
      const { text } = this.props
      return (
         <div>
            <p>Props {text}</p>
            <p>State {product}</p>
            {data && <p>Data {data}</p>}
         </div>
      )
   }
}
