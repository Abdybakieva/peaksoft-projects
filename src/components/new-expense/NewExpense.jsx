import { useState } from "react";
import { ExpenseForm } from "../expense-form/ExpenseForm";
import Button from "../UI/Button/Button";

export const NewExpense = () => {
  const [showForm, setShowForm] = useState(false);

  const newExpenseButtonClickHandler = () => {
    setShowForm((prevState) =>{
        return !prevState;
    });

    console.log(showForm);
  };
  return (
    <div style={{ border: "2px solid violet", borderRadius: 10, padding: 30 }}>
      {showForm  ? (
        <ExpenseForm onShowForm={newExpenseButtonClickHandler}/>
      ) : (
        <Button
          title="Добавить новый расход"
          onClick={newExpenseButtonClickHandler}
        />
      )}
    </div>
  );
};
