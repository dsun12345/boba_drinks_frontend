export default function accountReducer (state = {accounts: []}, action) {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return {accounts: action.payload}
        case 'ADD_ACCOUNT':
            return {...state, accounts: [...state.accounts, action.payload]}
        case 'ADD_BOBA':
            let account = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: account}
        case 'DELETE_BOBA':
            let accountTwo = state.accounts.map(account => {
                if (account.id === action.payload.id) {
                    return action.payload
                } else {
                    return account
                }
            })
            return {...state, accounts: accountTwo}
        
        default:
            return state
        }
}