
// Grupo de Estilos - stlGroup
type Tprops_stlGroup = { pass: { arrayValue: any } };
export const stlGroup = (props: Tprops_stlGroup) => {
  let { arrayValue } = props.pass;

  const isArray = Array.isArray(arrayValue);
  if (isArray) {
    arrayValue = arrayValue.reduce((prev, curr) => prev + curr, '');
  }
  return arrayValue;
};

