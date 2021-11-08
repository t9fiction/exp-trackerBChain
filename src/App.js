import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { History } from './components/History';
import { IncomeExpense } from './components/IncomeExpense';
import { Transaction } from './components/Transaction';
import { TransactionList } from './components/TransactionList';
import {useStore} from './store/GlobalState'

function App() {

  const {transactions} = useStore();
  console.log(transactions,"Transactions")
  return (
    <div className="App">
      <header className="App-header">
          Expense Tracker App
      </header>
      <Balance />
      <IncomeExpense />
      <History />
      <TransactionList />
      <Transaction />
      <AddTransaction />
      </div>
  );
}

export default App;
