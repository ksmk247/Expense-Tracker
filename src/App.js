import React, { useState } from "react";
import Balance from "./components/Balance";
import IncomeExpense from "./components/IncomeExpense";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);

  const handleAddTransaction = (transaction) => {
    setTransactions([transaction, ...transactions]);
  };
  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <Balance transactions={transactions} />
      <IncomeExpense transactions={transactions} />
      <TransactionList transactions={transactions} />
      <AddTransaction addTransaction={handleAddTransaction} />
    </div>
  );
}

export default App;
