
export type initialStateType = {
  Transactions: {
    id: number;
    text: string;
    amount: number;
  }[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionType) => void;
};

export type Actions =
  | { type: "Delete_Transaction"; payload: number }
  | { type: "Add_Transaction"; payload: TransactionType };


export type TransactionType = {
  id: number;
  text: string;
  amount: number;
};

export type TransactionPropType = {
  transaction: { id: number; text: string; amount: number };
};
