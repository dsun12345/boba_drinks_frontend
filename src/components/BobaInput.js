import React from 'react'
import {connect} from 'react-redux'
import {addBoba} from '../actions/addBoba'


class BobaInput extends React.Component {

    state = {
        name: '',
        amount: '',
        description: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addBoba(this.state, this.props.account.id)
        this.setState(
            {
                name: '',
                amount: '',
                description: ''
            }
        )
    }


    render () {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Boba Name:</label>
                    <input type='text' name='name' value={this.state.name} onChange={this.handleChange}/> 
                    <label>Boba Amount:</label>
                    <input type='text' name='amount' value={this.state.amount} onChange={this.handleChange}/> 
                    <label>Boba Description:</label>
                    <input type='text' name='description' value={this.state.description} onChange={this.handleChange}/> 
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addBoba})(BobaInput)