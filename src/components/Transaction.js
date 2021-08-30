import React, { useContext } from 'react'
import CloseButton from 'react-bootstrap/CloseButton'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext)

	const sign = transaction.amount < 0 ? '-' : '+'

	return (
		<li className={transaction.amount < 0 ? "transaction-item transaction-item--minus" : "transaction-item  transaction-item--plus"}>
				<span className="transaction-name">{transaction.text}</span> <span className="transaction-amount"> {sign} RM {Math.abs(transaction.amount)}</span>
				<CloseButton onClick={() => deleteTransaction(transaction.id)} className="btn-close-sm"/>
		</li>
	)
}
