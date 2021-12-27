import React, { FormEvent, useContext } from "react";
import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { api } from "../../services/api";
import { TransactionsContext } from "../../context/TransactionsContext";

Modal.setAppElement("#root");

interface NewTransactionModaProps {
  isOpen: boolean;
  onRequestClose: () => void;
}
export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTransactionModaProps) => {

  const [type, setType] = React.useState('deposit')
  const [title,setTitle] = React.useState('')
  const [amount,setAmount] = React.useState(0)
  const [category,setCategory] = React.useState('')

  const { createTransaction }= useContext(TransactionsContext)

  const handleCreateNewTransaction = (e:FormEvent) => {
    e.preventDefault();
    createTransaction({type,title,amount,category})
  }


  return (
   
      <Modal 
       isOpen={isOpen} 
       onRequestClose={onRequestClose}
       overlayClassName="react-modal-overlay"
       className="react-modal-content"
       >
        <button type="button" 
        onClick={onRequestClose} 
        className="react-modal-close">
        <img src={closeImg} alt="fechar modal" />
        </button>

       <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastra transação</h2>
        
        <input type="text" placeholder="Título"
        value={title}
        onChange={({target}) => setTitle(target.value)}
        />
        <input type="number" placeholder="Valor"
         
          onChange={({target}) => setAmount(Number(target.value))}
        />

        <TransactionTypeContainer>
          
          <RadioBox
          type="button" 
          onClick={()=> setType('deposit')}
          isActive={type === 'deposit'}
          activeColor="green"

          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox 
          type="button" 
          onClick={()=> setType('withdraw')}
          isActive={type === 'withdraw'}
          activeColor="red"
          >
            <img src={outcomeImg} alt="Saida" />
            <span>Saida</span>
          </RadioBox>

        </TransactionTypeContainer>


        <input type="text" placeholder="Categoria"
          value={category}
          onChange={({target}) => setCategory(target.value)}
        />

        <button type="submit">Cadastrar</button>


        </Container>
      </Modal>
    
  );
};
