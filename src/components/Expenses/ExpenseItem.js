import React from 'react';
import Card from '../UI/Card';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({
  id,
  title,
  amount,
  location,
  date,
  onDelete
}) => (
  <Card className="expense-item">
    <ExpenseDate date={date}/>
    <div className="expense-item__description">
      <div className="expense-item__info">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
      <div className="expense-item__price">
        £{parseFloat(amount).toFixed(2)}
      </div>
      <div className="expense-item__delete">
        <button onClick={() => onDelete(id)}>X</button>
      </div>
    </div>
  </Card>
);


export default ExpenseItem;