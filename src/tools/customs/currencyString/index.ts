
type Tprops = {
  pass: { value: any[] };
  args?: any;
};

export const currencyString = (props: Tprops) => {
  const { value } = props.pass;

  console.log({ value });
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2, // Define o número mínimo de casas decimais
  });

  const numValue = Number(value.join());
  console.log({ numValue });
  const formatedValue = formatter.format(numValue);
  console.log({ formatedValue });

  return formatedValue;
};

