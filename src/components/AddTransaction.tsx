import React, { useState,useContext } from 'react'
import {GlobalContext} from '../context/GlobalState';


export const AddTransaction = () => {
    const [text, setText] = useState<string>("");
    const [amount,setAmount] = useState<number>(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit =(e: { preventDefault: () => void })  =>{
        e.preventDefault();
        const newTransaction= {
            id:Math.floor(Math.random()*100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }

    return (
        <>
        <h3>Add Transactions</h3>
            <form  onSubmit={onSubmit}>
                <div className="form-control">
                <label htmlFor="text">Description</label>
                <input type="text" value= {text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                <label htmlFor="amount"
                    >Amount <br />
                    (Negative - Expense, Positive + Income)</label
                >
                <input type="number" value={amount}  onChange={(e) => setAmount(Number (e.target.value))} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add Transaction</button>
            </form>  
        </>
    )
}
