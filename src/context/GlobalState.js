import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer.js'

// Initial state
const initialState = {
	transactions: [
			{ id: 1, text: 'Cash in', amount: 500 },
			{ id: 2, text: 'Cash out', amount: -200 },
			{ id: 3, text: 'Grab', amount: -50 },
			{ id: 4, text: 'Food', amount: -200 }
	]
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState)

	//Actions
	function deleteTransaction(id) {
		dispatch({
			type: 'DELETE_TRANSACTION',
			payload: id
		})
	}

	function addTransaction(transaction) {
		dispatch({
			type: 'ADD_TRANSACTION',
			payload: transaction
		})
	}

	return (<GlobalContext.Provider value={{
		transactions: state.transactions,
		deleteTransaction,
		addTransaction
	}}>
		{children}
		</GlobalContext.Provider>)
}
