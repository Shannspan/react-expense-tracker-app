import React from "react";
import { Header } from "./components/Header";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider, GlobalContext } from "./context/GlobalState";
import Modal from "react-modal";
import "./App.css";
import { useState, useContext } from "react";
import { format } from 'date-fns';

function App() {
  Modal.setAppElement(document.getElementsByTagName("container"));
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const AddTransaction = () => {
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
      closeModal();
    };

    return (
      <>
        <button onClick={closeModal} className="close-modal">
          x
        </button>
        <h3>I spent some money</h3>
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label htmlFor="expense">Expense</label>
            <input
              type="text"
              value={expense}
              onChange={(e) => setExpense(e.target.value)}
              placeholder="What I bought..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="date">Date </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.format(new Date(), 'dd/mm/yyyy'))} // another attempt tp change date format 
              // if this does not work try on AddTransaction.js next as unsure where the formatting is coming from. 
              // format could also be coming from browser
              placeholder="Enter date..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="How much it cost..."
            />
          </div>
          <div className="form-control">
            <label htmlFor="notes">Notes</label>
            <input
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Why I bought it..."
            />
          </div>
          <button className="submit">Spend Money</button>
        </form>
      </>
    );
  };

  return (
    <GlobalProvider>
      <Header />
      <div className="button-container">
        <button onClick={openModal} className="modal-button action">
          Spend Money
        </button>
      </div>
      <div className="container">
        <TransactionList />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal-window"
        >
          <div className="modal-content">
            <AddTransaction />
          </div>
        </Modal>
      </div>
    </GlobalProvider>
  );
}

export default App;
