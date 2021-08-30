import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {
	const { transactions } = useContext(GlobalContext)

	const amounts = transactions.map(transaction => transaction.amount)
	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2)
	const expense = (
		amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
	).toFixed(2)

	return (
		<div className="inc-exp-container d-flex position-relative justify-content-center rounded mt-2 mb-3 py-2 bg-isabelline ">
			<div className="inc-exp-income w-50">
				<h3 className="color-slate-gray text-center">
					Income
				</h3>
				<p className="color-green">
					+ RM {income}
				</p>
			</div>
			<div className="inc-exp-expenses w-50 text-center">
				<h3 className="color-slate-gray">
					Expenses
				</h3>
				<p className="color-red">
					- RM {expense}
				</p>
			</div>
		</div>
	)
}
