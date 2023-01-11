import { useState } from "react";
import Expenses from "../src/components/expenses/Expenses"
import './App.css';
import { NewExpense } from "./components/new-expense/NewExpense";



function App() {
  const [expenses, setExpenses]=useState([
    {
      title:'Туалетная бумага',
      price: 300,
      date: new Date()
    },
    {
      title:'зарядник',
      price: 400,
      date: new Date()
    }
  ])
  const addNewExpenseHandler =(date)=>{
    const updatedExpenses=[...expenses]
    updatedExpenses.push(date)
    setExpenses(updatedExpenses)
  }

  return (
    <div className="App">
      <NewExpense onNewExpenseAdd={addNewExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
