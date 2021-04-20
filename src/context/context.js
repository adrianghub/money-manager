import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer.js';

const initialState = [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  console.log(transactions);
  
  // Actions -> changing the state of transactions
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  return (
    <MoneyManagerContext.Provider value={{ 
      addTransaction, 
      deleteTransaction,
      transactions 
      }}>
      {children}
    </MoneyManagerContext.Provider>
  )
}