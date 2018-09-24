import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Ships from './Components/Ships';
import Characters from './Components/Characters';
import Planets from './Components/Planets';

class App extends Component {
  constructor(){
    super();
    this.state={
      showShips:false,
      showCharacters:false,
      showPlanets:false
    }
    this.showCharacters=this.showCharacters.bind(this);
    this.showShips=this.showShips.bind(this);
    this.showPlanets=this.showPlanets.bind(this);
  }

  componentDidMount(){}

  showShips(){
    this.setState({
      showShips:true,
      showCharacters:false,
      showPlanets:false 
    })
  }

  showCharacters(){
    this.setState({
      showShips:false,
      showCharacters:true,
      showPlanets:false 
    })
  }

  showPlanets(){
    this.setState({
      showShips:false,
      showCharacters:false,
      showPlanets:true 
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.showShips}>Ships</button>
        <button onClick={this.showCharacters}>Characters</button>
        <button onClick={this.showPlanets}>Planets</button>
        {this.state.showShips? <Ships /> : null}
        {this.state.showCharacters? <Characters /> : null}
        {this.state.showPlanets? <Planets /> : null}
      </div>
    );
  }
}

export default App;