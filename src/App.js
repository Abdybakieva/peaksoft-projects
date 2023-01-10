import Expenses from "../src/components/expenses/Expenses"
import './App.css';
import { NewExpense } from "./components/new-expense/NewExpense";

const expenses=[
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

  
]

function App() {
  return (
    <div className="App">
      <NewExpense/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
