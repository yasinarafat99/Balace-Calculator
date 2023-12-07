import "./App.css";
import Title from "./component/title";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TranscitionList";
import AddTransaction from "./component/AddTransaction";

function App() {
  return (
    <div>
      <Title />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
