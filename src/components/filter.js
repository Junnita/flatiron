const filterTransactions = (searchTerm, transactions) => {
	// Convert the search term to lowercase for case-insensitive comparison
	const lowerCaseSearchTerm = searchTerm.toLowerCase();

	// Filter transactions based on the search term
	const filtered = transactions.filter((transaction) => {
		// Safely access description and provide a default empty string if undefined
		const description = transaction.description || '';
		return description.toLowerCase().includes(lowerCaseSearchTerm);
	});

	// Update state with filtered transactions
	setFilteredTransactions(filtered);
};
