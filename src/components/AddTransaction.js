import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { format } from 'date-fns';
format(new Date(), 'dd/mm/yyyy') 

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
      <h3>I spent some money</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="expense">I got</label>
          <input
            type="text"
            value={expense}
            onChange={(e) => setExpense(e.target.value)}
            placeholder="What I bought..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">On </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">For </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="How much it cost..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="notes">Because</label>
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Why I bought it..."
          />
        </div>
        <button className="action">Spend Money</button>
      </form>
    </>
  );
};
