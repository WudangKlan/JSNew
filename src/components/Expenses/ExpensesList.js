import React from "react";
import ExpensesItem from "./ExpensesItem";
import "./ExpensesList.css"

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }


  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpensesItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
