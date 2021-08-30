import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import { Transaction } from "./Transaction";

export const Balance = () => {
	const { transactions } = useContext(GlobalContext)

	// Map transactions obj into transaction
	const amounts = transactions.map(transaction => transaction.amount)
	// Turn value to positive and 2 decimal
	const total = amounts.reduce((acc, item) => (acc += item),0 ).toFixed(2)

	return (
		<div className="justify-content-start text-start bg-grullo rounded-3 mb-3 px-3 py-4">
			<div className="font-lg color-bone">
				<div className="bottom-0">Balance:</div>
			</div>
			<div id="balance" className="font-xl color-bone">
				<span>RM </span>{total}
			</div>
		</div>
	)
}


