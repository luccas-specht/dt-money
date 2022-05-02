import logoImg from '../../assets/logo.svg';

import { Container, Content } from './styles';

interface Props {
  buttonTitle?: string;
  onOpenNewTransactionModal: () => void;
}

export const Header = ({
  buttonTitle = 'Nova Transação',
  onOpenNewTransactionModal,
}: Props) => (
  <Container>
    <Content>
      <img src={logoImg} alt="dt money" />
      <button type="button" onClick={onOpenNewTransactionModal}>
        {buttonTitle}
      </button>
    </Content>
  </Container>
);
