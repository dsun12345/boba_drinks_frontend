import React from 'react'
import {connect} from 'react-redux'
import {addBoba} from '../actions/addBoba'


class BobaInput extends React.Component {

    state = {
        name: '',
        quantity: ''
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
                quantity: ''
            }
        )
    }


    render () {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Boba Name:</label>
                    <select name='name' value={this.state.name} onChange={this.handleChange}> 
                        <option>Please Select a drink.... </option>
                        <option>Black Sugar Milk Tea</option>
                        <option>Regular Milk Tea</option>
                        <option>Taro Milk Tea</option>
                        <option>Thai Iced Tea</option>
                    </select>
                    <label>Quantity:</label>
                    <input type='text' name='quantity' value={this.state.quantity} onChange={this.handleChange}/> 
                    <input type='submit'/>
                </form>
            </div>
        )
    }

}

export default connect(null, {addBoba})(BobaInput)