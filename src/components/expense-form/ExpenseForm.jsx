import Button from "../UI/Button/Button"
import FormInput from "../UI/formInput/FormInput"
import {useState} from "react"

export const ExpenseForm = (props) =>{

  const [title,setTitle] =useState("")
  const [price,setPrice] =useState(0)
  const [date,setDate] =useState(null)


  const expenseButton=(event) =>{
    event.preventDefault()
    props.onShowForm()
  }

const titleInputChangeHandler=(event)=>{
  setTitle(event.target.value);
}

const priceInputChangeHandler=(event)=>{
  const value = event.target.value
  if(value.charAt(0) !=="-"){
    setPrice(value)
  }
}

const dateInputChangeHandler=(event)=>{
  setDate(event.target.value);
}

  const saveHandler = (event) =>{
    event.preventDefault();
    
    const expenseData ={
      title,
      date,
      price,
    }
    props.onNewExpenseAdd(expenseData)
    setDate("")
    setPrice("")
    setTitle("")
  }
    return (
      <form>
        <FormInput id="name" labelNmae="Название" inputType="Text" placeholder="..." value={title} onChange={titleInputChangeHandler}/>
        <FormInput id="price" labelNmae="количество" inputType="number" value ={price} onChange={priceInputChangeHandler} />
        <FormInput id="date" labelNmae="Дата" inputType="date" placeholder="дд.мм.гггг " value={date} onChange={dateInputChangeHandler}/>
        <Button title="Отмена" onClick={expenseButton}/>  
        <Button title="Сохранить" onClick={saveHandler} />  
      </form>  
    )
}