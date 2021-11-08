import { useState } from 'react';
import { useStore } from '../store/GlobalState';
import { addTransaction, UpdateTransaction } from '../store/action';

export const AddTransaction = () => {
    const { transactions, dispatch } = useStore();
    const [amount, setAmount] = useState(0);
    const [value, setValue] = useState("");

    console.log(dispatch, "Transactions")

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTransaction(value))
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onClick={handleSubmit}>
                {transactions.map(transactions => transactions.product)}
                <br />
                <label htmlFor="text">Product : </label>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter Product ..." />
                <br />
                <label htmlFor="amount">Amount : </label>
                <input type="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <br />
                <button>Add Transaction</button>
            </form>
        </div>
    )
}