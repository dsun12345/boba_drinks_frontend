import React from 'react';
import {connect} from 'react-redux'
import {addAccount} from '../actions/addAccount'

class AccountInput extends React.Component {

    state = {name: '', balance: ''}
   

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addAccount(this.state)
        this.setState({
            name: '', balance: ''
        })
        this.props.history.push('/accounts')
    }

    render () {
        return (
           
            <div>
                <h1>New Account</h1> 
                <form onSubmit={this.handleSubmit}>
                    <label>Account Name: </label>
                    <input type ='text' placeholder='Name' value={this.state.name} name= 'name' onChange={this.handleChange}/><br/>
                    <label>Account Balance: </label>
                    <input type ='text' placeholder='balance' value={this.state.balance} name= 'balance' onChange={this.handleChange}/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default connect(null, {addAccount})(AccountInput)