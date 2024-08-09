# Bank Transactions App

## Overview

The Bank Transactions App is a simple React application for managing and viewing bank transactions. It allows users to add new transactions, search through existing transactions, and view a list of transactions. The app interacts with a backend API to fetch and post transaction data.

## Features

- **View Transactions**: Displays a list of transactions fetched from a backend server.
- **Add Transaction**: Allows users to add new transactions, including a description, date, and amount.
- **Search Transactions**: Provides a search bar to filter transactions based on their description.
- **Responsive Design**: The app is designed to work on various screen sizes, including mobile devices.

## Technologies

- React: A JavaScript library for building user interfaces.
- CSS: For styling the components and ensuring a responsive design.
- Fetch API: For making HTTP requests to the backend server.

## Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/bank-transactions-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd bank-transactions-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Start the development server**:

    ```bash
    npm start
    ```

    The app should now be running at `http://localhost:3000`.

## Usage

1. **Viewing Transactions**:
   - On app load, transactions are fetched from the backend and displayed in a list.

2. **Adding Transactions**:
   - Use the form to input the date, description, and amount of a new transaction.
   - Click the "Add Transaction" button to submit the form and save the transaction.

3. **Searching Transactions**:
   - Enter a search term in the search bar and click the "Search" button to filter transactions based on their description.

## Backend API

The app expects a backend server running at `http://localhost:3000` with the following endpoints:

- `GET /transactions`: Fetches all transactions.
- `POST /transactions`: Adds a new transaction.

Make sure to have a backend server running with a compatible API or use a tool like [json-server](https://github.com/typicode/json-server) to create a mock API for development.

## Components

- **`App`**: Main component that manages the state and handles logic for adding, searching, and filtering transactions.
- **`SearchBar`**: Component for searching transactions.
- **`TransactionForm`**: Component for adding new transactions.
- **`TransactionList`**: Component for displaying the list of transactions.

## Styling

The app uses basic CSS for styling and ensuring a responsive layout. You can modify the `App.css` file to customize the appearance.

## Contributing

If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Open a pull request with a description of your changes.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any questions or issues, please contact [your-email@example.com](mailto:your-email@example.com).

## Author 
1.   If you want to view my transaction app click [here]( https://flatiron-theta.vercel.app/)
-  **JUNNE WANJA**

