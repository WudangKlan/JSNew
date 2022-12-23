import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { items } = props;

  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });

  // selain turnary conditon bisa digunakan cara ini
  //--------------------------------------------
  let expensesList = <p> No Expenses</p>;

  if (filteredExpenses.length > 0)
    expensesList = filteredExpenses.map((expense) => (
      <ExpensesItem
        key={expense.id}
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
      />
    ));
  //--------------------------------------------

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilteredYear={filteredYear}
        />

        {/* {
          // turnary codition ...............
          filteredExpenses.length == 0 ? (
            <p>No Expenses </p>
          ) : (
            filteredExpenses.map((expense) => (
              <ExpensesItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            ))
          )
        } */}

         
       
          {/* {filteredExpenses.length == 0 && <p>No Expenses </p>}
          {filteredExpenses.length >=0 &&
            filteredExpenses.map((expense) => (
              <ExpensesItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            ))
          } cara lain.......................*/}
        
          {expensesList}
      </Card>
    </div>
  );
}

export default Expenses;
