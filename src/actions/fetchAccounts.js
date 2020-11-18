
export function fetchAccounts () {
    return (dispatch) => {
      console.log('c')
      fetch('http://localhost:3000/api/v1/accounts')
      .then(response => response.json())
      .then(accounts => {
        console.log('d')
        dispatch({
        type: 'FETCH_ACCOUNTS',
        payload: accounts
      })})
    }
}

