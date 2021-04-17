import React, { Component } from 'react'
import fetchAPI from './APIFetcher'

import type { IpcRenderer } from 'electron';

declare global {
  interface Window {
    require: (module: 'electron') => {
      ipcRenderer: IpcRenderer
    };
  }
}

const { ipcRenderer } = window.require('electron');

export default class App extends Component {
  
  state = {
    apiText : "Bitte warten, Kommunikation mit dem Server wird aufgebaut"
  }

  componentDidMount(){
   this.getAPI();
    
  }

  getAPI = () =>{
    fetchAPI().then(e => this.setState({apiText:e.text}))
  }

  killProgramm = () =>{
    ipcRenderer.sendSync("killme");
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.apiText}</h1>
        <button onClick={this.getAPI}>Neuer Spruch</button>
        <button onClick={this.killProgramm}>X</button>
      </div>
    )
  }
}
