import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

const ExpenseItem = ({
  date,
  title,
  amount
}) => {

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date}/>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">£{amount.toFixed(2)}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;