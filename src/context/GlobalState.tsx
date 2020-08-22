
import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { TransactionType, initialStateType } from "../types";


const initialstate: initialStateType = {
  Transactions: [{ id: 1, text: "Cash", amount: 200 }],
  deleteTransaction: () => {},
  addTransaction: () => {},
};

export const GlobalContext = createContext(initialstate);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);


  function deleteTransaction(id: number) {
    dispatch({
      type: "Delete_Transaction",
      payload: id,
    });
  }

  function addTransaction(transactionData: TransactionType) {
    dispatch({
      type: "Add_Transaction",
      payload: transactionData,
    });
  }

  return (
    <div>
      <GlobalContext.Provider
        value={{
          Transactions: state.Transactions,
          deleteTransaction,
          addTransaction,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </div>
  );
};
