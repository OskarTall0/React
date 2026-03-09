import "./App.css";
import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "id1",
      date: new Date(2023, 0, 19),
      title: "New Book",
      price: 39.99,
    },
    {
      id: "id2",
      date: new Date(2024, 0, 19),
      title: "New jeans",
      price: 99.99,
    },
    {
      id: "id3",
      date: new Date(2024, 0, 25),
      title: "New bag",
      price: 139.99,
    },
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;