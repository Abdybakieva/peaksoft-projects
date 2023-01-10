import ExpenseItem from "../expense-item/ExpenseItem";

const Expenses = (props) => {
  return (
    <ul style={{ padding: '20px' , border:"2px solid black"}}>
      {props.expenses.map((elem) => {
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
