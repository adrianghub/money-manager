import { useContext } from 'react';
import { MoneyManagerContext } from './context/context';

import { incomeCategories, expanseCategories, resetCategories } from './constants/categories';

// [
//   { id: 1, type: 'Income', amount: 50, cateogry: 'Salary' }.
//   { id: 2, type: 'Income', amount: 100, cateogry: 'Salary' }.
//   { id: 3, type: 'Expense', amount: 50, cateogry: 'Entertainment' }.
//   { id: 4, type: 'Income', amount: 50, cateogry: 'Businesss' }
// ]

// export const incomeCategories = [
//   { type: 'Business', amount: 0, color: incomeColors[0] },
//   { type: 'Investments', amount: 0, color: incomeColors[1] },
//   { type: 'Investments', amount: 0, color: incomeColors[1] }
// ];

const useTransactions = (title) => {
  resetCategories();

  const { transactions } = useContext(MoneyManagerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce((sum, curr) => sum += curr.amount, 0);
  const categories = title === 'Income' ? incomeCategories : expanseCategories;

  console.log({transactionsPerType, total, categories});

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category)

    if(category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((c) => c.amout > 0);

  const chartData = {
    datasets: [{
      data: filteredCategories.map((c) => c.amount),
      backgroundColor: filteredCategories.map((c) => c.color)
    }],
    labels: filteredCategories.map((c) => c.type)
  }

  return { total, chartData };

}

export default useTransactions;