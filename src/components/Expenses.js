import React from 'react'
import ExpensesItem from './ExpensesItem'
import './Expenses.css'
import Card from './Card'

function Expenses(props) {

const {items}= props
  return (
    <Card className='expenses'>
    <ExpensesItem
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
    />
  </Card>
  )
}

export default Expenses