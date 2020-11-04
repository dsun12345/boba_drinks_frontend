import React from 'react';
import accountReducer from '../reducers/accountReducer';


const Accounts = (props) => {

    return (
        <div>
            {props.accounts.map(account => <li key={account.id}>{account.name} - {account.balance}</li>)}
        </div>
    )

}

export default Accounts