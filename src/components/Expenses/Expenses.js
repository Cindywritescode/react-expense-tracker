import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = ({
  items,
  onDeleteExpense
}) => {
  const [filteredYear, setFilteredYear] = useState('2021');

  const expenseDeleteHandler = (id) => {
    onDeleteExpense(id)
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={setFilteredYear}/>
      {items
        .filter(item => item.date.getFullYear() === parseInt(filteredYear))
        .map(({ id, title, amount, date, location }, key) => <ExpenseItem {...{ key, id, title, amount, date, location }} onDelete={expenseDeleteHandler} />)
      }
    </Card>
  );
};

export default Expenses;