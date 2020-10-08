import React from "react";
import { Header } from "./components/header/header";
import { Balance } from "./components/balance/balance";
import { IncomeExpenses } from "./components/income-expenses/incomeExpenses";
import { TransactionsList } from "./components/transactions/transactions-list/transactionsList";
import { AddTransaction } from "./components/transactions/add-transactions/addTransactions";
import {GlobalProvider} from './context/globalStates'
import "./App.css";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionsList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
