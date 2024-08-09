import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import TransactionForm from './components/transactionForm';
import TransactionList from './components/transactionList';
import './App.css';

const App = () => {
	const [transactions, setTransactions] = useState([]);
	const [filteredTransactions, setFilteredTransactions] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		// Fetch transactions from the backend server
		const fetchTransactions = async () => {
			try {
				const response = await fetch('https://phase-2-backend.vercel.app/transactions');
				const data = await response.json();
				setTransactions(data);
				setFilteredTransactions(data); // Initialize filtered transactions
			} catch (error) {
				console.error('Error fetching transactions:', error);
			}
		};

		fetchTransactions();
	}, []);

	// Event handler for adding a new transaction
	const handleAddTransaction = async (newTransaction) => {
		// Generate a unique ID for the new transaction
		newTransaction.id = Math.floor(Math.random() * 1000000);

		try {
			// Post the new transaction to the server
			const response = await fetch('https://phase-2-backend.vercel.app/transactions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(newTransaction),
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			// Get the response data (including the transaction with its ID from the server)
			const savedTransaction = await response.json();

			// Update the state with the new transaction
			const updatedTransactions = [...transactions, savedTransaction];
			setTransactions(updatedTransactions);
			filterTransactions(searchTerm, updatedTransactions); // Re-filter with the new transaction
		} catch (error) {
			console.error('Error adding transaction:', error);
		}
	};

	// Event handler for searching transactions
	const handleSearch = (searchTerm) => {
		setSearchTerm(searchTerm);
		filterTransactions(searchTerm, transactions);
	};

	// Function to filter transactions based on the search term
	const filterTransactions = (searchTerm, transactions) => {
		const lowerCaseSearchTerm = searchTerm.toLowerCase();

		const filtered = transactions.filter((transaction) => {
			// Safely access description and provide a default empty string if undefined
			const description = transaction.description || '';
			return description.toLowerCase().includes(lowerCaseSearchTerm);
		});

		// Update state with filtered transactions
		setFilteredTransactions(filtered);
	};

	return (
		<div className='App'>
			<h1>BANK TRANSACTIONS</h1>
			<SearchBar onSearch={handleSearch} />
			<TransactionList transactions={filteredTransactions} />
			<TransactionForm onAddTransaction={handleAddTransaction} />
		</div>
	);
};

export default App;
