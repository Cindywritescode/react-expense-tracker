import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { initialExpenses } from './data';
import { useState } from 'react';

const App = () => {
  const [expenses, setExpenses] = useState(initialExpenses);

  const addExpenseHandler = expense => {
    setExpenses(expenses.concat(expense));
  };

  const deleteExpenseHandler = id => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <div>
      <NewExpense
        onAddExpense={addExpenseHandler}
      />
      <Expenses
        onDeleteExpense={deleteExpenseHandler}
        items={expenses}
      />
    </div>
  );
};

export default App;
