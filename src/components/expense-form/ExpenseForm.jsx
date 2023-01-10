import Button from "../UI/Button/Button"
import FormInput from "../UI/formInput/FormInput"

export const ExpenseForm = (props) =>{
  const expenseButton=(event) =>{
    event.preventDefault()
    props.onShowForm()
  }
    return (
      <form>
        <FormInput id="name" labelNmae="Название" inputType="Text" placeholder="..."/>
        <FormInput id="price" labelNmae="количество" inputType="number" />
        <FormInput id="date" labelNmae="Дата" inputType="date" placeholder="дд.мм.гггг"/>
        <Button title="Отмена" onClick={expenseButton}/>  
        <Button title="Сохранить"  />  
      </form>  
    )
}