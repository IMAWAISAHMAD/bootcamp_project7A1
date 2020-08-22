import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';
import {TransactionType} from '../types';

export const TransactionList = () => {
    const {Transactions} = useContext(GlobalContext);
    console.log(Transactions);
    return (
    <>
        <h3>History</h3>
        <ul className="list">
            {Transactions.map((transaction:TransactionType)=>( <Transaction key={transaction.id}  transaction = {transaction} />))}
           
        </ul>
    </>
    )
}
