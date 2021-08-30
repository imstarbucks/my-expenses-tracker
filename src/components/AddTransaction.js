import React, { useState, useContext } from 'react'

import { FloatingLabel } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const { addTransaction } = useContext(GlobalContext)

	const [validated, setValidated] = useState(false);
/* 	const onSubmit = e => {
		e.preventDefault();


	} */

  	const handleSubmit = (event) => {
    	const form = event.currentTarget;
    	if (form.checkValidity() === false) {
      		event.preventDefault();
      		event.stopPropagation();
    	}
		else {
			event.preventDefault();
			const newTransaction = {
				id: Math.floor(Math.random() * 1000000000),
				text,
				amount: +amount
			}

			addTransaction(newTransaction)
		}
    	setValidated(true);
  	};

	return (
		<div className="add-transaction-container position-relative rounded bg-isabelline mt-2 mb-3 py-2">
			<h3 className="add-transaction-header color-slate-gray font-lg">
				Add Transaction
			</h3>
			<Form noValidate validated={validated} onSubmit={handleSubmit} >
				<Row className="justify-content-center">
					<Col
					lg={10}>
						<Form.Group className="mx-5 my-3">
							<FloatingLabel label="Transaction Name:" className="color-slate-gray text-start" >
								<Form.Control value={text} onChange={(e) => setText(e.target.value)} type="text" placeholder="eg. Food" required/>
							</FloatingLabel>
						</Form.Group>
						<Form.Group className="mx-5 my-3">
							<FloatingLabel label="Amount (RM):" className="color-slate-gray text-start" >
								<Form.Control value={amount} onChange={(e) => setAmount(e.target.value)} type="number" placeholder="eg. 7.00" required/>
							</FloatingLabel>
						</Form.Group>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<Col
					xs={4}
					lg={7}
					className="text-end">
						<Button className="btn-add" type="submit">Add</Button>
					</Col>
				</Row>
			</Form>
		</div>
	)
}
