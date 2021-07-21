import "./ExpenseForm.css"

const ExpenseForm = () => {
  const titleChangeHandler = () => {
    console.log('Title changed!')
  };

  return (
  <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <labl>Title</labl>
        <input type="text"  onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <labl>Amount</labl>
        <input type="number" min="0.01" step="0.01" />
      </div>
      <div className="new-expense__control">
        <labl>Date</labl>
        <input type="date" min="2019-01-01" max="2022-12-31" />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>
  );
}; 

export default ExpenseForm;