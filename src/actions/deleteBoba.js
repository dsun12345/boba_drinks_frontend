export const deleteBoba = (bobaId, accountId) => {

    return (dispatch) => {
        return fetch(`http://localhost:3000/api/v1/accounts/${accountId}/boba/${bobaId}`, {
            method: 'DELETE'
        }) 
        .then(response => response.json())
        .then(account => dispatch({type: "DELETE_BOBA", payload: account}))
    }
}