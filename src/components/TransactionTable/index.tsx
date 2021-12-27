import React from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface Transactions {
  title: string;
  amount: number;
  id: string;
  createdAt: string;
  type: string;
  category:string;
}

export const TransactionTable = () => {
  const [listTransactions, setListTransactions] = React.useState<
    Transactions[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const response = await api.get("transactions");
      setListTransactions(response.data.transactions);
      console.log(response.data.transactions)
    })();
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {listTransactions.map(({title,amount,id,createdAt,type,category}) => (
               <tr key={id}>
               <td>{title}</td>

               <td className={type}>{new Intl.NumberFormat('pt-BR', {
                 style:'currency',
                 currency:'BRL'
               }).format(amount)}</td>

               <td>{category}</td>
               <td>{new Intl.DateTimeFormat('pt-BR').format(
                 new Date(createdAt)
                 )}</td>
             </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
