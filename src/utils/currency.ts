type Option = {
  key: string;
  formatter: {
    style: string;
    currency: string;
  };
};

export const formatToLocalCurrency = (
  amount: number,
  option: undefined | Option = {
    key: 'pt-BR',
    formatter: {
      style: 'currency',
      currency: 'BRL',
    },
  }
) => new Intl.NumberFormat(option.key, option.formatter).format(amount);
