import React, { useState } from "react";
import './ExpensesItem.css';
import ExpensesDate from "./ExpensesDate";
import Card from "../UI/Card";

function ExpensesItem(props) {

  const [title, setTitle]= useState(props.title)
  console.log("item is evaluated by React")

  const clickHandler = ()=>{
    setTitle("Updated")
    console.log(title)
  };
  
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click</button>
    </Card>
  );
}

export default ExpensesItem;
