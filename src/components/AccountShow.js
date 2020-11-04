import React from 'react';

const AccountShow = (props) => {

    let account = props.accounts[props.match.params.id - 1]
    

    return (
        <li>
            {account ? account.name : null} - {account ? account.balance : null}
        </li>
    )


}

export default AccountShow