import React, { Component } from 'react'
import fetchAPI from './APIFetcher'

export default class App extends Component {
  
  state = {
    apiText : "Bitte warten, Kommunikation mit dem Server wird aufgebaut"
  }

  componentDidMount(){
    fetchAPI().then(e => this.setState({apiText:e.text}))
    
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.apiText}</h1>
      </div>
    )
  }
}
