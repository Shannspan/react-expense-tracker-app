import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <table>
        <tr className="table-header">
          <th>Expense</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Notes</th>
          <th>Update</th>
        </tr>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </table>
    </>
  );
};
