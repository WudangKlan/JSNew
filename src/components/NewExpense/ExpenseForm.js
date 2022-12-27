import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //console.log(enteredTitle,enteredAmount,enteredDate)

  //atau gunakan 1 state
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //   console.log(userInput)

  //vanila JS
  //document.getElementById('').addEventListener('click',(event)=>{})
  const titleChangeHandler = (event) => {
    //console.log(event)
    //console.log(event.target.value)
    setEnteredTitle(event.target.value);

    // kalau bergantung kepada prevState untuk diubah harap gunakan function
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    // kalau bergantung kepada prevState untuk diubah harap gunakan function
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredAmount: event.target.value };
    //   });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);

    // kalau bergantung kepada prevState untuk diubah harap gunakan function
    //   setUserInput((prevState) => {
    //     return { ...prevState, enteredDate: event.target.value };
    //   });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData)

    //yang menggunakan object
    // const expenseData = {
    //     title : userInput.enteredTitle,
    //     amount : userInput.enteredAmount,
    //     date : new Date(userInput.enteredDate)
    // }

   // console.log(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onCancel}>on Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
