import { useState } from 'react';
import Modal from 'react-modal';

import { TransactionProvider } from './hooks/TransactionsContext';
import { Dashboard, Header, NewTransactionModal } from './components/';

import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export const App = () => {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </TransactionProvider>
  );
};
