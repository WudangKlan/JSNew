import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const { items } = props;

  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYear = (selectedYear) => {
    //console.log(selectedYear)
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()=== selectedYear;
  })
  //console.log(filteredExpenses)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilteredYear={filteredYear}
        />

        {/* {props.items.map((expense) => (
          <ExpensesItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))} */}

        {filteredExpenses.map((expense) => (
          <ExpensesItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))}

        {/* <ExpensesItem
          date={items[0].date}
          title={items[0].title}
          amount={items[0].amount}
        />
        <ExpensesItem
          date={items[1].date}
          title={items[1].title}
          amount={items[1].amount}
        />
        <ExpensesItem
          date={items[2].date}
          title={items[2].title}
          amount={items[2].amount}
        />
        <ExpensesItem
          date={items[3].date}
          title={items[3].title}
          amount={items[3].amount}
        /> */}
      </Card>
    </div>
  );
}

export default Expenses;
