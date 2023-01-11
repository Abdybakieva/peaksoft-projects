import "./expense-item.css"
const ExpenseItem = ({ date, title, price }) => {
  return (
    <div className="item">
      <div className="item-list">
      <p>{date.toString()}</p>
      </div>
      <div className="item-list2">
      <h4>{title}</h4>
      <p>{` $ ${price}`}</p>
    </div>
    </div>
  );
};
export default ExpenseItem;
