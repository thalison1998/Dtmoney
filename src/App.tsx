import { DashBoard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/Global";
import React from 'react'
import { NewTransactionModal } from "./components/newTransactionModal";


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);

  const handleOpenNewTransactionModal = () => setIsNewTransactionModalOpen(true)
  const handleCloseNewTransactionModal = () => setIsNewTransactionModalOpen(false)


  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={handleCloseNewTransactionModal}
      />
      <DashBoard />
      <GlobalStyle />
    </>
  );
}
