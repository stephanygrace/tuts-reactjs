import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
// import Hello from './components/Hello'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Greet name="Doms" heroName="Superman">
          This is the Children props
        </Greet>
        <Greet name="Tin" heroName="Batman"/>
          <button>Action</button>
        <Greet name="Domy" heroName="My Hero"/>

        <Welcome name="Doms" heroName="Superman" />
        <Welcome name="Domsyy" heroName="Supermanny" />
      </div>
    )
  }
}

export default App;
