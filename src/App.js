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
    otherState: 'some other value',
    showPersons: false
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

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    const styleButton = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
              name={person.name} 
              age={person.name} />
          })}
        </div>
      )
    }

  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p>What is your name?</p>
      <button 
        style={styleButton}
        onClick={this.togglePersonHandler}
      >
        Show/Hide Name
      </button>
      {persons}
    </div>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am React'))
}
}

export default App;
