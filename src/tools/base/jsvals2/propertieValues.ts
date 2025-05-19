
// ---------------------- Direct Return
// -------- propObj, propString, propArray
// ------ stringValue, arrayValue, freeValue
type Tprops_propertieValues = {
  pass: { propertieValues: any };
};
export const propertieValues = (props: Tprops_propertieValues) => {
  const { propertieValues } = props.pass;
  return propertieValues;
};

