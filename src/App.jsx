import "./App.css";
import Balance from "./component/Balance";
import IncomeExpense from "./component/IncomeExpense";
import TransactionList from "./component/TranscitionList";
import AddTransaction from "./component/AddTransaction";
import { Title } from './component/Title';

function App() {
  return (
    <div>
    <Title></Title>
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
