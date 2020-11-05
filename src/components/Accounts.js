import React from 'react';
import {Link} from 'react-router-dom'

const Accounts = (props) => {

    return (
        <div>
            <h1>Accounts</h1> 
            {props.accounts.map(account => 
            <div key={account.id}>
            <Link to={`/accounts/${account.id}`}>{account.name}</Link>
            </div>)}
        </div>
    )

}

export default Accounts