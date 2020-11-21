import axios from 'axios'

import * as Types from './types'

export const loadTransactions = () => dispatch => {
    axios.get('http://localhost:4000/api/users/transactions/')
        .then(response => {
            dispatch({
                type: Types.LOAD_TRANSACTIONS,
                payload: {
                    transactions: response.data
                }
            })
        })
        .catch(error => {
            console.log(error)
        })
}

export const addNewTransaction = transaction => dispatch => {
    axios.post('http://localhost:4000/api/users/transactions/', transaction)
        .then(response => {
            console.log(response)
            dispatch({type: Types.CREATE_TRANSACTION, payload: { transaction: response.data}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const removeTransaction = id => dispatch => {

    axios.delete(`http://localhost:4000/api/transactions/${id}`)
        .then(response => {
            dispatch({type: Types.REMOVE_TRANSACTION, payload: {id: response.data._id}})
        })
        .catch(error => {
            console.log(error)
        })
}

export const updateTransaction = (id, transaction) => dispatch => {
    axios.put(`http://localhost:4000/api/transactions/${id}`, transaction)
        .then(response => {
            dispatch({type: Types.UPDATE_TRANSACTION, payload: {transaction: response.data.transaction}})
        })
        .catch(error => {
            console.log(error)
        })
}