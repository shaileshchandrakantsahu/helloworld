import React, { Component } from 'react'

class Countme extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count: 0,
       pcount: 0
    }
  }
  
  increment(params) {
    this.setState({
      pcount: this.state.count,
      count:this.state.count+1
    },()=>console.log(this.state.count))
  }
  render() {
    return (
      <div>
      <div>pcount= {this.state.pcount} </div>
      <div>ccount= {this.state.count} </div>
      <button onClick={()=>this.increment()}>CountMe</button>
      </div>
    )
  }
}

export default Countme