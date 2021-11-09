import React from 'react'
import { useStore } from '../store/GlobalState';

export const Balance = () => {

    const { transactions} = useStore();
    const balance = transactions.map(transaction => transaction.amount)
    const total = balance.reduce((acc, item)=>(acc += item),0).toFixed(2);
    console.log(balance,"balance")
    return (
        <div>
            <h2>
                Balance
            </h2>
            <h3>
                ${total}
            </h3>
        </div>
    )
}
