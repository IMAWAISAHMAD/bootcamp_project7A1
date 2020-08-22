
import { TransactionType } from "../types";

type Actions =
  | { type: "Delete_Transaction"; payload: number }
  | { type: "Add_Transaction"; payload: TransactionType };

export default (state: { Transactions: TransactionType[] }, action: Actions) => {
  switch (action.type) {
    case "Delete_Transaction":
      return {
        ...state,
        Transactions: state.Transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    case "Add_Transaction":
      return {
        ...state,
        Transactions: [action.payload, ...state.Transactions],
      };

    default:
      return state;
  }
};
