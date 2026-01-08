import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div className="expense-item__date">
        <ExpenseDate date={props.data.date} />
      </div>

      <div className="expense-item__description">
        <h2>{props.data.title}</h2>
      </div>

      <div className="expense-item__price">{props.data.price}</div>
    </div>
  );
};

export default ExpenseItem;
