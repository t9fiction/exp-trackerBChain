import React from 'react'
import { useStore } from '../store/GlobalState';

export const TransactionList = () => {
    const { transactions } = useStore();
    return (
        <div>
            <h3>History</h3>
            <ul>
                {transactions.map(transaction => transaction.product)}
            </ul>
        </div>
    )
}
