import React,{useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {

  const saveExpenseDataHandler = (enteredExpenseData)=>{
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    }
    //console.log(expenseData)
    props.onAddExpense(expenseData)
    setIsAccess(false)
  }

  const [isAccess, setIsAccess]=useState(false)

  const accessHandler = ()=>{
    setIsAccess(true)
  };

  // let accessForm = <button onClick={accessHandler}>Add New Expense</button>

  // if (isAccess===true){
  //   accessForm = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
  // }

  const onCancelHandler = ()=>{
    setIsAccess(false)
  }

  return (
    <div className='new-expense'>
        {!isAccess && <button onClick={accessHandler}>Add New Expense</button>}
        {isAccess && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel ={onCancelHandler}/>}
    </div>
  )
}

export default NewExpense