import React, { Component } from 'react'
import './App.css'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass'
import Aux from '../hoc/Auxiliary'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
    this.state = {
      persons: [
        { id: '1', name: "Max", age: 28 },
        { id: '2', name: "Max1", age: 24 },
        { id: '3', name: "Max2", age: 26 },
      ],
      otherState: 'some other value',
      showPersons: false,
      showCockpit: false,
      changeCounter: 0
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props)
    return state
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate')
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
    this.setState({ persons: persons, changeCounter: this.state.changeCounter + 1 })
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
    console.log('[App.js] render')
    let persons = null

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
    }

  return (
    <Aux>
      <button onClick={() => {
        this.setState({showCockpit: false})}
      }>
        Remove Cockpit
      </button>
      {this.state.showCockpit ? <Cockpit
        title={this.props.appTitle} 
        showPersons={this.state.showPersons} 
        personsLength={this.state.persons.length}
        toggle={this.togglePersonHandler} /> : null }
      {persons}
    </Aux>
  );
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I am React'))
}
}

export default withClass(App, "App");
