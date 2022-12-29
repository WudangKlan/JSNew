import React, { useState } from "react";
import ExpensesItem from "./ExpensesItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const { items } = props;

  const [selectedYear, setSelectedYear] = useState("2020");

  const filteredYear = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === selectedYear;
  });



  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onChangeFilteredYear={filteredYear}
        />
       
        <ExpensesChart expenses={filteredExpenses}/>
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
        
          <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
