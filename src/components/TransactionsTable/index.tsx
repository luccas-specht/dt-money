import { useTransactions } from '../../hooks/index';
import { formatToLocalCurrency, formatToLocalDate } from '../../utils';

import { Container } from './styles';

export const TransactionsTable = () => {
  const { transactions } = useTransactions();

  const headersInPtBR = ['Título', 'Valor', 'Categoria', 'Data'];

  const renderTransactions = () =>
    transactions.map(({ id, type, title, amount, category, createdAt }) => (
      <tr key={id}>
        <td>{title}</td>
        <td className={type}>{formatToLocalCurrency(amount)}</td>
        <td>{category}</td>
        <td>{formatToLocalDate(createdAt)}</td>
      </tr>
    ));

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {headersInPtBR.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{renderTransactions()}</tbody>
      </table>
    </Container>
  );
};
