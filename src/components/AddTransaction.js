import { useState } from 'react';
import { useStore } from '../store/GlobalState';
import { addTransaction } from '../store/action';

export const AddTransaction = () => {
    const { dispatch } = useStore();
    const [amount, setAmount] = useState(0);
    const [product, setProduct] = useState("");

    console.log(dispatch, "Transactions")

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTrans = {
            id: Math.floor(Math.random() * 1000000),
            product,
            amount : +amount
        }
        dispatch(addTransaction(newTrans))
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onClick={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Product : </label>
                    <input type="text" value={product} onChange={(e) => setProduct(e.target.value)} placeholder="Enter Product ..." />
                </div>
                <div className="form-control">
                    <label htmlFor="number">Amount : </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                </div>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}