const ExpenseItem = ({ date, title, price }) => {
  return (
    <div style={{border:'2px solid green'}}>
      <p>{date.toString()}</p>
      <p>{title}</p>
      <p>{price}</p>
    </div>
  );
};
export default ExpenseItem;
