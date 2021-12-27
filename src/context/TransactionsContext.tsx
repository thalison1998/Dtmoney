import React, { createContext, ReactNode } from "react";
import { api } from "../services/api";
interface Transactions {
    title: string;
    amount: number;
    id: string;
    createdAt: string;
    type: string;
    category:string;
  }
interface TransactionsContextData {
  listTransactions: Transactions[];
  createTransaction: (listTransactions:TransactionInput) => void;
}

type TransactionInput = Omit<Transactions, 'id' | 'createdAt'>

interface TransactionsProviderProps {
    children:ReactNode;
}

export const TransactionsContext = createContext<TransactionsContextData>
({} as TransactionsContextData);


export const TransactionProvider = ({children}:TransactionsProviderProps) => {

    const [listTransactions, setListTransactions] =React.useState<
    Transactions[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const response = await api.get("transactions");
      setListTransactions(response.data.transactions);
    })();
  }, []);

  const createTransaction = (listTransactions:TransactionInput) => {
  
  api.post('/transactions', listTransactions);
  }
  

  return (
      <TransactionsContext.Provider value={{listTransactions, createTransaction}}>
          {children}
      </TransactionsContext.Provider>
  )

}
