import React, { Component } from 'react'
import './Person.css'
import Aux from '../../../hoc/Auxiliary'
import withClass from '../../../hoc/withClass'
import PropTypes from 'prop-types'
import AuthContext from '../../../context/auth-context'

class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef()
    }

    static contextType = AuthContext

    componentDidMount() {
        // document.querySelector('input').focus() //here will be focus of first element
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
        console.log(this.context.login)

    }

    render() {
        console.log('[Person.js] rendering...')
        return (
            <Aux>
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in!</p>}               
                <p onClick={this.props.click}>
                    I am a {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {inputEl.focus()}}
                    // ref={(inputEl) => {this.inputElement = inputEl}} //this approach works in class-based comp. not it funct.; this.inputElement -> will be a global property
                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Aux>  
        ) 
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}


export default withClass(Person, "Person")