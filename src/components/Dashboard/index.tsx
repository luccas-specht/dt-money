import { Summary, TransactionsTable } from '../';

import * as S from './styles';

export const Dashboard = () => (
  <S.Container>
    <Summary />
    <TransactionsTable />
  </S.Container>
);
