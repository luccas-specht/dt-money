import { useTransactions } from '../../hooks/index';

import { Container } from './styles';

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  const headers = ['Título', 'Valor', 'Categoria', 'Data'];

  const availableLanguages = {
    brazil: {
      key: 'pt-BR',
      name: 'Portuguese',
      formatter: {
        style: 'currency',
        currency: 'BRL',
      },
    },
  };

  const formatToLocalCurrency = (amount: number) =>
    new Intl.NumberFormat(
      availableLanguages.brazil.key,
      availableLanguages.brazil.formatter
    ).format(amount);

  const formatToLocalDate = (date: string) =>
    new Intl.DateTimeFormat(availableLanguages.brazil.key).format(
      new Date(date)
    );

  const renderTransactions = () =>
    transactions.map((transaction) => (
      <tr key={transaction.id}>
        <td>{transaction.title}</td>
        <td className={transaction.type}>
          {formatToLocalCurrency(transaction.amount)}
        </td>
        <td>{transaction.category}</td>
        <td>{formatToLocalDate(transaction.createdAt)}</td>
      </tr>
    ));

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTransactions()}</tbody>
      </table>
    </Container>
  );
};
