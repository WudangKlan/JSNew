import React from 'react'
import './ExpensesDate.css';

function ExpensesDate(props) {

    const month = props.date.toLocaleString('id-ID',{month:"long"})
    const day = props.date.toLocaleString('id-ID',{day:"numeric"})
    const year = props.date.getFullYear()

  return (
    <div className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__day'>{day}</div>
    <div className='expense-date__year'>{year}</div>
  </div>
  )
}

export default ExpensesDate