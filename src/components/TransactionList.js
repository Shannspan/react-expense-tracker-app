import React, { useContext } from "react";
import { Transaction } from "./Transaction";

import { GlobalContext } from "../context/GlobalState";

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <table>
        <tr className="table-header">
          <th>I GOT</th>
          <th>$'s</th>
          <th>ON</th>
          <th>BECAUSE</th>
          <th>REMOVE</th>
        </tr>
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} transaction={transaction} />
        ))}
      </table>
    </>
  );
};
