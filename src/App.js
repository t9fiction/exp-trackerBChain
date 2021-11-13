import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import Header from './components/Header';
import { IncomeExp } from './components/IncomeExp';
import { TransactionList } from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <header className="App-header"> 
      <Header />
      </header>
      <Balance />
      <IncomeExp />
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
