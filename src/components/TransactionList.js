import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <table>
        <tr className="table-header">
          <th>I got</th>
          <th>$'s</th>
          <th>On</th>
          <th>Because</th>
          <th>Remove</th>
        </tr>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </table>
    </>
  );
};
