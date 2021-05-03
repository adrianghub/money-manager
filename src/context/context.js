import React, { useReducer, createContext } from 'react';

import contextReducer from './contextReducer.js';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [];

export const MoneyManagerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  console.log(transactions);

  // Actions -> changing the state of transactions
  const addTransaction = (transaction) => dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
  const deleteTransaction = (id) => dispatch({ type: 'DELETE_TRANSACTION', payload: id });

  const balance = transactions.reduce((sum, curr) => curr.type === 'Expense' ? sum - curr.amount : sum + curr.amount, 0)

  return (
    <MoneyManagerContext.Provider value={{ 
      addTransaction, 
      deleteTransaction,
      transactions,
      balance
      }}>
      {children}
    </MoneyManagerContext.Provider>
  )
}