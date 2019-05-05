import React, { Component } from 'react'
import classes from './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id: '1', name: "Max", age: 28 },
      { id: '2', name: "Max1", age: 24 },
      { id: '3', name: "Max2", age: 26 },
    ],
    otherState: 'some other value',
    showPersons: false
}

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }
    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({ persons: persons })
  }

deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons})
}

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render () {
    // const styleButton = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    // }

    let persons = null
    let btnClass = ''

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      )
      // styleButton.backgroundColor = 'red'
      btnClass = classes.Red
    }

   let assignedCleasses = []
    if (this.state.persons.length <= 2) {
      assignedCleasses.push(classes.red) // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      assignedCleasses.push(classes.bold) // classes = ['red', 'bold']
    }

  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p className={assignedCleasses.join(' ')}>What is your name?</p>
      <button 
        // style={styleButton}
        className={btnClass}
        onClick={() => this.togglePersonHandler()}
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
