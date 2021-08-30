import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<>
			<div className="transaction-container position-relative rounded bg-isabelline mt-2 mb-3 py-2">
				<h3 className="transaction-header color-slate-gray font-lg">
					Transaction History
				</h3>
				<ul id="transaction-list" className="transaction-list">
					{transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
				</ul>
			</div>
		</>
	)
}
