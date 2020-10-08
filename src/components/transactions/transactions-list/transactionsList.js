import React from "react";

import { Transaction } from "./transaction";
import { useContext } from "react";
import { GlobalContext } from "../../../context/globalStates";

export const TransactionsList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
