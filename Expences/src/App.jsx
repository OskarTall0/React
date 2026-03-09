import "./App.css";
import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
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
  ];

  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
};

export default App;