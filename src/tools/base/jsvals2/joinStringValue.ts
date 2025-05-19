
// ------------ joinStringValue
// ----------------------------
type Tprops_joinStringValue = {
  pass: { arrayStrings: any; joinSeparator: any };
};
export const joinStringValue = (props: Tprops_joinStringValue) => {
  const { arrayStrings, joinSeparator } = props.pass;

  return arrayStrings.join(joinSeparator);
};

