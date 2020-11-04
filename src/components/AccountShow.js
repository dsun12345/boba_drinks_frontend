import React from 'react';
import {Redirect} from 'react-router-dom'
import BobasContainer from '../containers/BobasContainer'

const AccountShow = (props) => {

    let account = props.accounts[props.match.params.id - 1]
    

    return (
        <div>
            <h2>
                {account ? account.name : null} - {account ? account.balance : null}
            </h2>
            <BobasContainer account={account}/>
        </div>
    )


}

export default AccountShow