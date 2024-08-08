import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction, onClearTransactions }) => {
	const [date, setDate] = useState('');
	const [description, setDescription] = useState('');
	const [amount, setAmount] = useState('');

	// Event handler for form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const newTransaction = { date, description, amount };
		onAddTransaction(newTransaction);
		setDate('');
		setDescription('');
		setAmount('');
	};

	// Event handler to clear the form and transactions
	const handleClear = () => {
		setDate('');
		setDescription('');
		setAmount('');
		onClearTransactions(); // Clear transactions from parent component
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Date (YYYY-MM-DD)'
				value={date}
				onChange={(event) => setDate(event.target.value)}
			/>
			<input
				type='text'
				placeholder='Description'
				value={description}
				onChange={(event) => setDescription(event.target.value)}
			/>
			<input
				type='number'
				placeholder='Amount'
				value={amount}
				onChange={(event) => setAmount(event.target.value)}
			/>
			<button type='submit'>Add Transaction</button>
			<button
				type='button'
				onClick={handleClear}
			>
				Clear
			</button>
		</form>
	);
};

export default TransactionForm;
