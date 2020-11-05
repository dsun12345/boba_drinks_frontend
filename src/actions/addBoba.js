export const addBoba = (bobas, accountId) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/accounts/${accountId}/boba`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bobas)
        })
        .then(response => response.json())
        .then(account => {
            if (account.error) {
                alert(account.error) 
            } else {
            dispatch({type: 'ADD_BOBA', payload: account})
            }
        })
    }
}