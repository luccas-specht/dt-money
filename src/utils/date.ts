export const formatToLocalDate = (
  date: string,
  formatter: undefined | string = 'pt-BR'
) => new Intl.DateTimeFormat(formatter).format(new Date(date));
