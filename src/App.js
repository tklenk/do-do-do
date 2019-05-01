import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Max1", age: 24 },
      { name: "Max2", age: 26 },
    ],
    otherState: 'some other value'
}
  
  switchNameHandler = (newName) => {
    this.setState({ 
      persons: [
        { name: newName, age: 28 },
        { name: "Max1", age: 24 },
        { name: "Max2", age: 44 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 24 },
        { name: "Max2", age: 26 },
      ]
    })
  }

  render () {
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p>What is your name?</p>
      <button 
        style={styleButton}
        onClick={() => this.switchNameHandler('Maximilian!!')}
      >
        Switch Name
      </button>
      <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
      <Person
        click={this.switchNameHandler.bind(this, 'Max!')} 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler}/>
      <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am React'))
}
}

export default App;
