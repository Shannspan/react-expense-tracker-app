import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState(0);
  const [notes, setNotes] = useState("");

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      expense,
      date,
      amount: +amount,
      notes,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <button>x</button>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="expense">Expense</label>
          <input
            type="text"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="Enter expense name..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="notes">Notes</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Enter notes..."
          />
        </div>
        <button className="action">Spend Money</button>
      </form>
    </>
  );
};
