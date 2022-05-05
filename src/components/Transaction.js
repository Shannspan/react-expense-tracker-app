import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <tr>
      <td>{transaction.expense}</td>
      <td>${Math.abs(transaction.amount)}</td>
      <td>{transaction.date}</td>
      <td>{transaction.notes}</td>
      <td>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="update"
        >
          delete
        </button>
      </td>
    </tr>
  );
};
