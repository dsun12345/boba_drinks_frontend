import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchAccounts} from '../actions/fetchAccounts'
import Accounts from '../components/Accounts'
import AccountShow from '../components/AccountShow'
import AccountInput from '../components/AccountInput'

class AccountsContainer extends React.Component {

    componentDidMount() {
        console.log('a')
        this.props.fetchAccounts()
        console.log('b')
    }

    render () {
        return (
            <div>
                <Switch>
                    <Route path='/accounts/new' component={AccountInput}/>
                    <Route path='/accounts/:id' render={(routerProps) => <AccountShow {...routerProps} accounts={this.props.accounts}/> }/>
                    <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/> }/>
                </Switch>
            </div>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts
    }
};

export default connect(mapStateToProps, {fetchAccounts})(AccountsContainer)