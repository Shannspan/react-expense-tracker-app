import React, { createContext, useReducer, useState, useEffect } from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
  transactions: []
};

// Create context
export const GlobalContext = createContext(initialState);

//set API configuration
const axios = require('axios').default;
axios.defaults.baseURL = 'http://localhost:3000/expense'; //if your api is hosted elsewhere update here 

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Make a request for a user with a given ID
    if(loading){
    axios.get('/list').then(function (response) {
      // handle success
      // handle capitalised attribute names from API but converting to lowercase 
      initialState.transactions = JSON.parse(JSON.stringify(response.data).toLowerCase()); 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    }).then(function () {
      // always executed
      setLoading(false);
    });
  }
  }, []);

  // Actions
  function deleteTransaction(id) {
    axios.delete('/delete/' + id)
    .then(function (response) {
      // handle success
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id
      });
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  function addTransaction(transaction) {
    axios.post('/', transaction)
    .then(function (response) {
      // handle success
      dispatch({
        type: "ADD_TRANSACTION",
        payload: JSON.parse(JSON.stringify(response.data).toLowerCase())
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
