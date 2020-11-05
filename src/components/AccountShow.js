import React from 'react';
import BobasContainer from '../containers/BobasContainer'

const AccountShow = (props) => {

    let account = props.accounts.filter(account => account.id === parseInt(props.match.params.id))[0]

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