import React from 'react'
import { Container } from './styles'

export const TransactionTable = () => {
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
                   <tr>
                       <td>Desenvolvimento de site</td>
                       <td className='deposit'>R$ 12.000,00</td>
                       <td>Venda</td>
                       <td>13/04/2021</td>
                   </tr>
                   <tr>
                       <td>Aluguel</td>
                       <td className='withdraw'>R$ -1.000</td>
                       <td>Casa</td>
                       <td>13/04/2021</td>
                   </tr>
               </tbody>

           </table>
        </Container>
    )
}
