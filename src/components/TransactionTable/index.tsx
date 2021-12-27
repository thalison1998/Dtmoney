import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionsContext";
import { Container } from "./styles";


export const TransactionTable = () => {

  const {listTransactions} = useContext(TransactionsContext);

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
