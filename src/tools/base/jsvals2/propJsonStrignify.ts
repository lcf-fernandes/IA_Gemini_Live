
// --------- propJsonStrignify
// ---------------------------
type Tprops_propJsonStrignify = {
  pass: { objectProperties: any };
};
export const propJsonStrignify = (props: Tprops_propJsonStrignify) => {
  const { objectProperties } = props.pass;

  return JSON.stringify(objectProperties);
};

