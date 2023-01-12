import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

//Note for future development: Date format preference dd/mm/yyyy
// unable to achieve at this time (date-fns remains in dependencies)
// research start point: shadow root 
// one article found https://www.geeksforgeeks.org/what-is-shadow-root-and-how-to-use-it/

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
      <h3>About the money I spent</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="I got">I got</label>
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
