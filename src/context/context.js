import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer.js';

const initialState = [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);
  
  // Actions -> changing the state of transactions
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });

  const deleteTransactions = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  return (
    <MoneyManagerContext.Provider value={{ addTransaction, deleteTransactions }}>
      {children}
    </MoneyManagerContext.Provider>
  )
}