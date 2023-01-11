import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expense.css";


const Expenses = ({expenses}) => {
  return (
    <ul className="ul">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
export default Expenses;
